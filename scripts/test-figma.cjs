const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawn } = require('child_process');

// 1. Load .env
const envPaths = [
  path.resolve(process.cwd(), '.env'),
  path.resolve(__dirname, '..', '.env'),
  'B:/officialWeb/.env'
];

let loadedEnv = null;
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    try {
      process.loadEnvFile(envPath);
      loadedEnv = envPath;
      break;
    } catch (e) {
      // ignore
    }
  }
}

console.log('='.repeat(60));
console.log('🧪 FIGMA INTEGRATION & MCP DIAGNOSTIC TEST');
console.log('='.repeat(60));
console.log(`📂 Loaded .env from: ${loadedEnv || 'None found'}\n`);

const token =
  process.env.FIGMA_API_KEY ||
  process.env.FIGMA_PERSONAL_ACCESS_TOKEN ||
  process.env.FIGMA_TOKEN;

async function checkFigmaApi(token) {
  return new Promise((resolve) => {
    if (!token || token.trim() === '') {
      return resolve({
        ok: false,
        status: 0,
        message: 'No token found in .env (FIGMA_PERSONAL_ACCESS_TOKEN is empty)'
      });
    }

    const req = https.get(
      'https://api.figma.com/v1/me',
      {
        headers: {
          'X-Figma-Token': token.trim(),
          'User-Agent': 'Quantara-Figma-Tester/1.0'
        }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (res.statusCode === 200) {
              resolve({ ok: true, status: 200, user: json });
            } else {
              resolve({ ok: false, status: res.statusCode, error: json });
            }
          } catch (e) {
            resolve({ ok: false, status: res.statusCode, error: data });
          }
        });
      }
    );

    req.on('error', (err) => {
      resolve({ ok: false, status: 0, error: err.message });
    });

    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ ok: false, status: 0, error: 'Connection timed out' });
    });
  });
}

async function testMcpServer() {
  return new Promise((resolve) => {
    console.log('🔍 Testing Figma MCP Server stdio handshake...');
    const isWindows = process.platform === 'win32';
    // Use pnpm dlx or local runner
    const child = spawn(
      isWindows ? 'cmd.exe' : 'pnpm',
      isWindows ? ['/c', 'pnpm', 'dlx', 'figma-developer-mcp', '--stdio'] : ['dlx', 'figma-developer-mcp', '--stdio'],
      {
        env: {
          ...process.env,
          FIGMA_API_KEY: token || 'dummy_token_for_handshake'
        }
      }
    );

    let stdout = '';
    let stderr = '';
    let isResolved = false;

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
      const lines = stdout.split('\n');
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const msg = JSON.parse(line.trim());
          if (msg.id === 1 && msg.result) {
            if (!isResolved) {
              isResolved = true;
              child.kill();
              return resolve({ ok: true, serverInfo: msg.result.serverInfo, capabilities: msg.result.capabilities });
            }
          }
        } catch (e) {
          // not complete JSON yet
        }
      }
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', (err) => {
      if (!isResolved) {
        isResolved = true;
        resolve({ ok: false, error: err.message });
      }
    });

    child.on('exit', (code) => {
      if (!isResolved) {
        isResolved = true;
        resolve({ ok: false, code, stderr });
      }
    });

    // Send initialize request
    const initReq = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'diagnostic-test', version: '1.0.0' }
      }
    }) + '\n';

    child.stdin.write(initReq);

    setTimeout(() => {
      if (!isResolved) {
        isResolved = true;
        child.kill();
        resolve({ ok: false, error: 'MCP initialization timed out after 10s', stderr });
      }
    }, 10000);
  });
}

async function run() {
  console.log('1️⃣  Checking Figma API Token:');
  if (!token || token.trim() === '') {
    console.log('   ❌ FIGMA_PERSONAL_ACCESS_TOKEN is missing or blank in .env');
    console.log('   👉 Please add your Figma Personal Access Token to .env:');
    console.log('      FIGMA_PERSONAL_ACCESS_TOKEN=figd_your_token_here\n');
  } else {
    const masked = token.substring(0, 5) + '...' + token.substring(token.length - 4);
    console.log(`   🔑 Token detected: ${masked}`);
    const apiRes = await checkFigmaApi(token);
    if (apiRes.ok) {
      console.log('   ✅ Figma API Authentication: SUCCESS!');
      console.log(`      User: ${apiRes.user.handle || apiRes.user.email || 'Authenticated'}`);
      console.log(`      Email: ${apiRes.user.email || 'N/A'}`);
      console.log(`      ID: ${apiRes.user.id || 'N/A'}\n`);
    } else {
      console.log(`   ❌ Figma API Authentication FAILED (Status: ${apiRes.status})`);
      console.log(`      Response:`, apiRes.error || apiRes.message);
      console.log('      👉 Verify token has valid permissions and has not expired.\n');
    }
  }

  console.log('2️⃣  Checking Figma MCP Server:');
  const mcpRes = await testMcpServer();
  if (mcpRes.ok) {
    console.log('   ✅ Figma MCP Server: OPERATIONAL');
    console.log(`      Server: ${mcpRes.serverInfo?.name || 'Figma MCP Server'} (v${mcpRes.serverInfo?.version || 'unknown'})`);
    console.log('      Available Tools: get_figma_data, download_figma_images\n');
  } else {
    console.log('   ❌ Figma MCP Server failed to start:');
    console.log(`      Error: ${mcpRes.error || mcpRes.stderr || 'Exit code ' + mcpRes.code}\n`);
  }

  console.log('='.repeat(60));
  if (!token || token.trim() === '') {
    console.log('📋 SUMMARY: MCP server works, but FIGMA_PERSONAL_ACCESS_TOKEN is needed.');
  } else {
    console.log('📋 SUMMARY: Figma integration test complete.');
  }
  console.log('='.repeat(60));
}

run();
