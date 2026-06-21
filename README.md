# Hidden Solution RPC

> Made by **sixsdev**

A VS Code extension that displays a custom **Discord Rich Presence**, showing that you're working on a "private solution" — without revealing the project name.

---

## What does it do?

When active, it shows on your Discord profile like this:

> 🔒 **This solution is hidden**
> *Private Solution*

People can see you're coding, but **they don't know which project**.

---

## Requirements

- [Node.js](https://nodejs.org/) installed
- [VS Code](https://code.visualstudio.com/) installed
- Discord open on your PC (it must be running)

---

## How to install and use

### 1. Create an app on the Discord Developer Portal

> ⚠️ This is required for Rich Presence to work.

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications)
2. Click **New Application**
3. Give it any name (e.g. `Hidden RPC`) and click **Create**
4. On the left menu, click **OAuth2**
5. Copy the **Client ID**
6. Open `src/extension.ts` and paste it in the indicated place:

```ts
const clientId = 'YOUR_CLIENT_ID_HERE'; // ← paste here
```

---

### 2. Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/hidden-solution-rpc.git](https://github.com/sixsdev/Discord-Rich-Presence-hidden-solution-rpc.git
cd hidden-solution-rpc
```

### 3. Install dependencies

```bash
npm install
```

> This installs `discord-rpc` and the necessary TypeScript types.

### 4. Compile the TypeScript code

```bash
npm run compile
```

> This compiles `src/extension.ts` into JavaScript inside the `out/` folder.

### 5. Install the extension in VS Code

You have two options:

**Option A — Generate and install the `.vsix` file (easiest):**

1. Run `vsce package` to generate the `.vsix` file
2. Open VS Code
3. Press `Ctrl+Shift+P`
4. Type: `Extensions: Install from VSIX`
5. Select the generated `hidden-solution-rpc-1.0.0.vsix` file

**Option B — Run in development mode:**

1. Open the project folder in VS Code
2. Press `F5` to open a test extension window

### 6. Enable Rich Presence

1. Press `Ctrl+Shift+P` in VS Code
2. Type: `Enable Hidden Solution RPC`
3. Confirm — the message *"Hidden Solution RPC Enabled"* will appear

> ⚠️ Discord must be open before enabling.

### 7. Disable (optional)

1. Press `Ctrl+Shift+P`
2. Type: `Disable Hidden Solution RPC`

---

## Available commands

| Command | What it does |
|---|---|
| `Enable Hidden Solution RPC` | Enables the Discord Rich Presence |
| `Disable Hidden Solution RPC` | Removes the Discord Rich Presence |

---

## Project structure

```
├── src/
│   └── extension.ts   # Main extension code
├── media/
│   └── icon.png       # Extension icon
├── package.json       # Settings and dependencies
└── tsconfig.json      # TypeScript configuration
```

---

## How it works internally

1. When VS Code activates the extension, it connects to Discord via **IPC** (local inter-process communication)
2. When the connection is established (`ready`), it calls `setActivity()` which sends the data to Discord
3. Discord displays that information publicly on your profile
4. The `enable/disable` commands let you toggle it at any time

---

## Generate a new `.vsix` to distribute

```bash
npm install -g @vscode/vsce
vsce package
```

> This generates a new `.vsix` file you can send to anyone to install.

---

> Developed by **sixsdev** 🔒
