// Hidden Solution RPC — by sixsdev
import * as vscode from 'vscode';
import * as RPC from 'discord-rpc';

// Replace with your Client ID from the Discord Developer Portal
// Go to: https://discord.com/developers/applications → select your app → "OAuth2" tab → copy the "Client ID"
const clientId = 'YOUR_CLIENT_ID_HERE';

const rpc = new RPC.Client({
    transport: 'ipc'
});

let enabled = true;

async function setActivity() {
    if (!rpc) {
        return;
    }

    rpc.setActivity({
        details: 'This solution is hidden',
        state: 'Private Solution',
        largeImageKey: 'redlock',
        largeImageText: 'Private Solution',
        startTimestamp: Date.now(),
        instance: false
    });
}

export async function activate(context: vscode.ExtensionContext) {

    rpc.login({
        clientId
    }).catch(console.error);

    rpc.on('ready', async () => {
        if (enabled) {
            setActivity();
        }
    });

    const enableCommand = vscode.commands.registerCommand('hiddenrpc.enable', async () => {
        enabled = true;
        await setActivity();

        vscode.window.showInformationMessage('Hidden Solution RPC Enabled');
    });

    const disableCommand = vscode.commands.registerCommand('hiddenrpc.disable', async () => {
        enabled = false;

        await rpc.clearActivity();

        vscode.window.showInformationMessage('Hidden Solution RPC Disabled');
    });

    context.subscriptions.push(enableCommand);
    context.subscriptions.push(disableCommand);
}

export function deactivate() {
    rpc.destroy();
}