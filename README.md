# BoxLang Theme for Visual Studio Code

A collection of eye-popping, vibrant themes designed specifically for BoxLang development. These themes feature the signature BoxLang colors with bold, muted, and neon variations for both dark and light modes.

![BoxLang Theme Preview](images/preview.png)

## 🎨 Theme Variations

### Dark Themes

- **BoxLang Dark (Bold)** - Vibrant colors with high contrast for enhanced readability
- **BoxLang Dark (Muted)** - Softer, more subdued colors for extended coding sessions
- **BoxLang Dark (Neon Green)** - Electric green accents with BoxLang orange for a cyberpunk aesthetic

### Light Themes

- **BoxLang Light (Bold)** - Crisp, vibrant colors on a clean white background
- **BoxLang Light (Muted)** - Gentle, professional colors for a refined look
- **BoxLang Light (Neon Green)** - Bright green highlights with orange accents

## 🚀 Features

- **Semantic Highlighting** - Enhanced syntax highlighting for better code understanding
- **BoxLang Optimized** - Colors specifically chosen to complement BoxLang syntax
- **Eye-friendly** - Carefully balanced contrast ratios for comfortable coding
- **Consistent UI** - Themed interface elements including sidebar, tabs, and status bar
- **Multiple Variations** - Choose from bold, muted, or neon styles in both dark and light modes

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

- `#FF6B35` - Main brand color used for variables and highlights
- `#FF4500` - Operators and secondary elements
- `#FFB347` - Read-only variables and constants

### Accent Colors

- **Functions:** `#00CED1` (Dark Turquoise) / `#0000CD` (Medium Blue)
- **Strings:** `#32CD32` (Lime Green) / `#008000` (Green)
- **Keywords:** `#FF1493` (Deep Pink) / `#DC143C` (Crimson)
- **Classes:** `#9370DB` (Medium Purple) / `#8B008B` (Dark Magenta)
- **Comments:** `#696969` (Dim Gray) / `#708090` (Slate Gray)

### Neon Variations

- **Neon Green:** `#39FF14`, `#00FF00`, `#CCFF00`
- **Electric Accents:** `#7FFF00`, `#ADFF2F`, `#32CD32`

## 📸 Screenshots

### Dark Themes

![BoxLang Dark Bold](images/dark-bold.png)
![BoxLang Dark Muted](images/dark-muted.png)
![BoxLang Dark Neon](images/dark-neon.png)

### Light Themes

![BoxLang Light Bold](images/light-bold.png)
![BoxLang Light Muted](images/light-muted.png)
![BoxLang Light Neon](images/light-neon.png)

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
