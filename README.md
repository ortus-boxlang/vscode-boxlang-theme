# BoxLang Theme for Visual Studio Code

A collection of eye-popping, vibrant themes designed specifically for BoxLang development. These themes feature the signature BoxLang colors with bold, muted, and neon variations for both dark and light modes.

![BoxLang Theme Preview](images/preview.png)

## 🎨 Theme Variations

### Dark Themes

- **BoxLang Dark (Bold)** - Vibrant colors with high contrast for enhanced readability
- **BoxLang Dark (Muted)** - Softer, more subdued colors for extended coding sessions featuring teal and green accents
- **BoxLang Dark (Neon)** - Electric neon accents with darker readable greens for a cyberpunk aesthetic
- **BoxLang Dark (Synthwave)** - Retro synthwave vibes with pink, violet, and cyan on a dark purple background

### Light Themes

- **BoxLang Light (Bold)** - Crisp, vibrant colors on a clean white background
- **BoxLang Light (Muted)** - Gentle, professional colors for a refined look
- **BoxLang Light (Neon)** - Bright highlights with improved readability on light background
- **BoxLang Light (Synthwave)** - Inspired by Winter is Coming light with BoxLang branded accents

## 🚀 Features

- **Semantic Highlighting** - Enhanced syntax highlighting for better code understanding with consistent token colors
- **BoxLang Optimized** - Colors specifically chosen to complement BoxLang syntax and branding
- **Eye-friendly** - Carefully balanced contrast ratios with readable color choices
- **Consistent UI** - Themed interface elements including sidebar, tabs, and status bar
- **Multiple Variations** - Choose from bold, muted, neon, or synthwave styles in both dark and light modes
- **Bracket Pair Colorization** - Color-coded bracket pairs for better code structure visualization
- **Centralized Palette** - Consistent color management across all theme variations

## 📦 Installation

### From VS Code Marketplace

1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "BoxLang Theme"
4. Click Install
5. Go to File > Preferences > Color Theme
6. Select your preferred BoxLang theme

### Manual Installation

1. Clone this repository
2. Copy the theme folder to your VS Code extensions directory:
   - **Windows:** `%USERPROFILE%\.vscode\extensions`
   - **macOS:** `~/.vscode/extensions`
   - **Linux:** `~/.vscode/extensions`
3. Restart VS Code
4. Select the theme from File > Preferences > Color Theme

## 🎯 Recommended Settings

For the best experience with BoxLang themes, consider these VS Code settings:

```json
{
    "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.fontSize": 14,
    "editor.lineHeight": 1.5,
    "editor.semanticHighlighting.enabled": true,
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": "active",
    "workbench.colorCustomizations": {
        // Add custom color overrides here if needed
    }
}
```

## 🌈 Color Palette

### BoxLang Orange (Primary)

- `#FF6B35` - Main brand color used for primary highlights and operators
- `#FF9A6B` - Light variant for secondary elements
- `#FF8C69` - Muted variant for subtle accents

### Core Accent Colors

- **Teal & Cyan Family:** `#00CED1` (Dark Turquoise), `#06B6D4` (Cyan), `#40E0D0` (Turquoise Light)
- **Purple & Blue Family:** `#7C5CFA` (Accent Purple), `#1E90FF` (Dodger Blue)
- **Green Family:** `#32CD32` (Lime Green), `#2E8B57` (Sea Green), `#00FA9A` (Medium Spring Green)
- **Specialized:** `#FFD700` (Gold), `#696969` (Comment Gray)

### Synthwave Colors

- **Pink & Violet:** `#FF1493` (Deep Pink), `#DA70D6` (Orchid)
- **Electric:** `#00FFFF` (Cyan), `#FFA500` (Orange)
- **Backgrounds:** `#0D0221` (Deep Purple), `#1A0B2E` (Purple Light)

### Bracket Pair Colors

A 4-color cycle for bracket pair colorization:

1. `#FF6B35` (BoxLang Orange)
2. `#7C5CFA` (Purple)
3. `#06B6D4` (Cyan)
4. `#34D399` (Emerald Green)

## 📸 Screenshots

### Dark Themes

![BoxLang Dark Bold](images/dark-bold.png)
![BoxLang Dark Muted](images/dark-muted.png)
![BoxLang Dark Neon](images/dark-neon.png)
![BoxLang Dark Synthwave](images/dark-synthwave.png)

### Light Themes

![BoxLang Light Bold](images/light-bold.png)
![BoxLang Light Muted](images/light-muted.png)
![BoxLang Light Neon](images/light-neon.png)
![BoxLang Light Synthwave](images/light-synthwave.png)

## 🛠 Development

To modify or contribute to these themes:

1. Clone the repository
2. Edit the theme JSON files in the `themes/` directory
3. Install the extension locally for testing
4. Submit a pull request with your changes

### Building Themes

```bash
npm install
npm run build
```

### Testing Themes

To test themes during development:

```bash
npm run dev:host
```

This opens VS Code Extension Development Host with the test folder loaded.

### Palette and contributing color changes

We centralize shared colors in `themes/palette.json`. When proposing changes to colors, update `palette.json` first — the build script will inject bracket highlights and semantic token colors into each theme automatically.

The centralized palette includes:

- Primary BoxLang orange variants
- Teal and green accent families for improved branding alignment
- Synthwave color schemes for retro themes
- Consistent bracket pair colorization
- Background and foreground colors for all theme types

If you use GitHub Copilot or other AI assistants, follow the repo guidance in `.github/copilot-instructions.md` to keep spacing, palette usage, and bracket highlighting consistent.

### Toggleable light preset (what it means)

A toggleable light preset is a user-selectable variation of a light theme with a different contrast/accent profile (for example: `Light (Muted)` vs `Light (Neon)` vs `Light (Synthwave)`). The idea is to provide a lightweight switch so users can quickly toggle between a more muted, balanced light theme and a neon/accent-heavy light preset without switching to a completely different theme package.

Implementation note: we implement each preset as its own theme JSON (e.g. `boxlang-light-muted.json`, `boxlang-light-neon.json`, `boxlang-light-synthwave.json`). The build step ensures shared palette colors stay consistent.

### Launch Extension Development Host (test folder)

You can open a VS Code Extension Development Host with this repository loaded and the `test` folder opened for quick manual testing.

```bash
# Make sure you have the `code` CLI available in your PATH (Command Palette -> "Shell Command: Install 'code' command in PATH")
npm run dev:host
```

This runs `scripts/open-dev-host.js` which will invoke the `code` CLI with `--extensionDevelopmentPath` and open the `test` folder in the development host window.

## 📝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Reporting Issues

- Use the [GitHub Issues](https://github.com/ortus-boxlang/vscode-boxlang-theme/issues) page
- Include screenshots when reporting visual issues
- Specify your VS Code version and operating system

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- BoxLang team for the amazing language and branding
- VS Code community for theme development resources
- Color palette inspired by BoxLang's official branding

## 🔗 Related Extensions

- [BoxLang Language Support](https://marketplace.visualstudio.com/items?itemName=ortus-solutions.vscode-boxlang) - Official BoxLang language extension
- [ColdBox Extension](https://marketplace.visualstudio.com/items?itemName=ortus-solutions.vscode-coldbox) - ColdBox framework support
- [TestBox Extension](https://marketplace.visualstudio.com/items?itemName=ortus-solutions.vscode-testbox) - TestBox testing framework support

---

Made with ❤️ by the [Ortus Solutions](https://www.ortussolutions.com) team for the BoxLang community.

🚀 **Happy Coding with BoxLang!** 🚀
