# BoxLang Theme Screenshot Guide

## 📸 Screenshot Creation Checklist

### Prerequisites
- [ ] Extension Development Host running (F5)
- [ ] Test BoxLang file open (`test/theme-test.bx`)
- [ ] Screenshot tool ready (built-in or third-party)

### For Each Theme Variant

#### 1. BoxLang Dark (Bold)
- [ ] Activate theme: `Cmd+K Cmd+T` → "BoxLang Dark (Bold)"
- [ ] Screenshot: Full editor with syntax highlighting
- [ ] File: `screenshots/boxlang-dark-bold.png`

#### 2. BoxLang Dark (Muted) 
- [ ] Activate theme: `Cmd+K Cmd+T` → "BoxLang Dark (Muted)"
- [ ] Screenshot: Full editor with syntax highlighting
- [ ] File: `screenshots/boxlang-dark-muted.png`

#### 3. BoxLang Dark (Neon Green)
- [ ] Activate theme: `Cmd+K Cmd+T` → "BoxLang Dark (Neon Green)"
- [ ] Screenshot: Full editor with syntax highlighting  
- [ ] File: `screenshots/boxlang-dark-neon.png`

#### 4. BoxLang Light (Bold)
- [ ] Activate theme: `Cmd+K Cmd+T` → "BoxLang Light (Bold)"
- [ ] Screenshot: Full editor with syntax highlighting
- [ ] File: `screenshots/boxlang-light-bold.png`

#### 5. BoxLang Light (Muted)
- [ ] Activate theme: `Cmd+K Cmd+T` → "BoxLang Light (Muted)"
- [ ] Screenshot: Full editor with syntax highlighting
- [ ] File: `screenshots/boxlang-light-muted.png`

#### 6. BoxLang Light (Neon Green)
- [ ] Activate theme: `Cmd+K Cmd+T` → "BoxLang Light (Neon Green)"
- [ ] Screenshot: Full editor with syntax highlighting
- [ ] File: `screenshots/boxlang-light-neon.png`

### Screenshot Best Practices

#### Window Setup
1. **Window Size**: Use a standard size (1200x800 or 1400x900)
2. **Zoom Level**: 100% or 110% for readability
3. **Hide unnecessary panels**: Focus on code editor
4. **Clean workspace**: Close unrelated files

#### Code Display
1. **Open test file**: Use `test/theme-test.bx` 
2. **Show variety**: Scroll to show different syntax elements
3. **Highlight features**: Show comments, strings, keywords, functions
4. **Multiple file types**: Show `.bx`, `.cfc`, `.cfm` if possible

#### UI Elements to Include
- [ ] Syntax highlighting (most important)
- [ ] File explorer sidebar
- [ ] Status bar  
- [ ] Tab bar with multiple files
- [ ] Line numbers
- [ ] Minimap (optional)

### macOS Screenshot Commands
- **Full screen**: `Cmd + Shift + 3`
- **Selection**: `Cmd + Shift + 4` 
- **Window**: `Cmd + Shift + 4` then `Space` then click window
- **Save to clipboard**: Add `Ctrl` to any above combination

### Recommended Screenshot Dimensions
- **Main preview**: 1200x800 (16:10 ratio)
- **Gallery images**: 1376x790 (VS Code Marketplace standard)
- **Comparison shots**: 1400x900

### File Naming Convention
```
screenshots/
├── boxlang-dark-bold.png
├── boxlang-dark-muted.png  
├── boxlang-dark-neon.png
├── boxlang-light-bold.png
├── boxlang-light-muted.png
├── boxlang-light-neon.png
├── preview.png (main hero image)
└── comparison.png (side-by-side themes)
```

### Creating a Hero/Preview Image
1. Use the most popular theme (probably BoxLang Dark Bold)
2. Show rich BoxLang syntax
3. Include some UI elements (sidebar, status bar)
4. High quality, good contrast
5. This becomes your main `preview.png`

### Optional: Comparison Screenshots
- Side-by-side theme comparisons
- Before/after with default themes
- Multiple themes in grid layout

### Post-Processing Tips
1. **Consistent sizing**: All screenshots same dimensions
2. **File optimization**: Compress PNG files
3. **Retina support**: Provide 2x versions if needed
4. **Accessibility**: Ensure good contrast in screenshots themselves
