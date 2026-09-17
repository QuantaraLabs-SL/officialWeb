const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// 1. Locate and load .env file
const candidates = [
  path.resolve(process.cwd(), '.env'),
  path.resolve(__dirname, '..', '.env'),
  'B:/officialWeb/.env'
];

for (const envPath of candidates) {
  if (fs.existsSync(envPath)) {
    try {
      process.loadEnvFile(envPath);
      break;
    } catch (e) {
      // Continue to next candidate
    }
  }
}

// 2. Normalize token from .env
const token =
  process.env.FIGMA_API_KEY ||
  process.env.FIGMA_PERSONAL_ACCESS_TOKEN ||
  process.env.FIGMA_TOKEN;

if (!token) {
  console.error('[figma-mcp] Error: FIGMA_API_KEY or FIGMA_PERSONAL_ACCESS_TOKEN not found in .env');
} else {
  process.env.FIGMA_API_KEY = token;
}

// 3. Determine best runner (pnpm dlx avoids npm 11.0.0 Arborist SemVer crash on Windows)
const { execSync } = require('child_process');
let runner = 'npx';
try {
  execSync('pnpm --version', { stdio: 'ignore' });
  runner = 'pnpm';
} catch (e) {
  // fallback to npx
}

const isWindows = process.platform === 'win32';
const command = isWindows ? 'cmd.exe' : runner;
const args = runner === 'pnpm'
  ? (isWindows ? ['/c', 'pnpm', 'dlx', 'figma-developer-mcp', '--stdio'] : ['dlx', 'figma-developer-mcp', '--stdio'])
  : (isWindows ? ['/c', 'npx', '-y', 'figma-developer-mcp', '--stdio'] : ['-y', 'figma-developer-mcp', '--stdio']);

const child = spawn(command, args, {
  stdio: 'inherit',
  env: process.env
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
