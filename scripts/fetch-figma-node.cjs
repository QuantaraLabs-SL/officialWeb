const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawn } = require('child_process');

process.loadEnvFile('.env');
const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN || process.env.FIGMA_API_KEY;
const fileKey = 'Io3mUPprTnA4W7MyhRgJbG';
const nodeId = '48:30102';
const artifactDir = 'C:\\Users\\Dinuka\\.gemini\\antigravity-ide\\brain\\1d7b5c13-dc7c-4497-8be4-5e997a510ec9';

function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpsGet(res.headers.location, headers).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, body: Buffer.concat(chunks) }));
    }).on('error', reject);
  });
}

async function fetchImageRender() {
  console.log('📸 Requesting image render from Figma API...');
  const res = await httpsGet(
    `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=2`,
    { 'X-Figma-Token': token }
  );
  const json = JSON.parse(res.body.toString('utf-8'));
  console.log('Image API response:', json);
  const imageUrl = json.images && json.images[nodeId];
  if (!imageUrl) {
    console.error('No image URL returned for node');
    return null;
  }
  console.log('Downloading image from:', imageUrl);
  const imgRes = await httpsGet(imageUrl);
  const outPath = path.join(artifactDir, 'figma_preview_48_30102.png');
  fs.writeFileSync(outPath, imgRes.body);
  console.log('✅ Saved image preview to:', outPath);
  return outPath;
}

async function fetchViaMcp() {
  return new Promise((resolve, reject) => {
    console.log('🌲 Fetching Figma data via MCP tool get_figma_data...');
    const isWindows = process.platform === 'win32';
    const child = spawn(
      isWindows ? 'cmd.exe' : 'pnpm',
      isWindows ? ['/c', 'pnpm', 'dlx', 'figma-developer-mcp', '--stdio'] : ['dlx', 'figma-developer-mcp', '--stdio'],
      {
        env: {
          ...process.env,
          FIGMA_API_KEY: token
        }
      }
    );

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
      const lines = stdout.split('\n');
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const msg = JSON.parse(line.trim());
          if (msg.id === 2 && msg.result) {
            child.kill();
            return resolve(msg.result);
          }
        } catch (e) {}
      }
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('exit', (code) => {
      // If exited before resolving
    });

    // 1. Initialize
    const initMsg = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'fetcher', version: '1.0' }
      }
    }) + '\n';
    child.stdin.write(initMsg);

    // 2. Call tool get_figma_data
    setTimeout(() => {
      const toolMsg = JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'get_figma_data',
          arguments: {
            fileKey,
            nodeId
          }
        }
      }) + '\n';
      child.stdin.write(toolMsg);
    }, 1500);

    setTimeout(() => {
      child.kill();
      reject(new Error('MCP fetch timed out. Stderr: ' + stderr));
    }, 25000);
  });
}

async function main() {
  try {
    await fetchImageRender();
    const mcpData = await fetchViaMcp();
    const dataOutPath = path.join(artifactDir, 'figma_data_48_30102.json');
    fs.writeFileSync(dataOutPath, JSON.stringify(mcpData, null, 2));
    console.log('✅ Saved MCP Figma data to:', dataOutPath);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
