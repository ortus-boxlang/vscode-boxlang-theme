#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Purpose: Open VS Code Extension Development Host with this extension and the test folder
// Usage: node scripts/open-dev-host.js

function whichCodeCli() {
    // Prefer 'code' in PATH. On macOS users might have 'code' available if they installed "Shell Command: Install 'code' command in PATH".
    return 'code';
}

const repoRoot = path.resolve(__dirname, '..');
const testFolder = path.join(repoRoot, 'test');

if (!fs.existsSync(testFolder)) {
    console.error('[open-dev-host] test folder not found at:', testFolder);
    process.exit(2);
}

const codeCli = whichCodeCli();

// Arguments:
// --extensionDevelopmentPath=<repoRoot> opens the extension in development mode
// --extensionTestsPath is used for running extension tests (not needed here)
// --folder-uri or simply open the test folder in addition to the extension host? We'll open the test folder in a second window of the development host using --folder-uri

const args = [
    '--extensionDevelopmentPath=' + repoRoot,
    testFolder
];

const proc = spawn(codeCli, args, { stdio: 'inherit' });

proc.on('error', (err) => {
    console.error('[open-dev-host] Failed to run "code". Make sure the VS Code command-line is installed and on your PATH.');
    console.error(err.message);
    console.error("On macOS: open Command Palette and run \"Shell Command: Install 'code' command in PATH\"");
    process.exit(1);
});

proc.on('close', (code) => {
    process.exit(code);
});
