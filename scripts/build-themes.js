#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Building BoxLang Themes...');

// Verify all theme files exist
const themeDir = path.join(__dirname, '..', 'themes');
const expectedThemes = [
    'boxlang-dark-bold.json',
    'boxlang-dark-muted.json',
    'boxlang-dark-neon.json',
    'boxlang-light-bold.json',
    'boxlang-light-muted.json',
    'boxlang-light-neon.json',
    'boxlang-dark-synthwave.json',
    'boxlang-light-synthwave.json'
];

let allThemesValid = true;

expectedThemes.forEach(themeName => {
    const themePath = path.join(themeDir, themeName);
    if (!fs.existsSync(themePath)) {
        console.error(`❌ Missing theme file: ${themeName}`);
        allThemesValid = false;
        return;
    }

    try {
        let themeContent = JSON.parse(fs.readFileSync(themePath, 'utf8'));

        // Inject palette-driven bracket highlights if palette exists
        const palettePath = path.join(themeDir, 'palette.json');
        if (fs.existsSync(palettePath)) {
            try {
                const palette = JSON.parse(fs.readFileSync(palettePath, 'utf8'));
                themeContent.colors = themeContent.colors || {};
                // Add bracket highlight cycle
                themeContent.colors['editorBracketHighlight.foreground1'] = palette.bracket1;
                themeContent.colors['editorBracketHighlight.foreground2'] = palette.bracket2;
                themeContent.colors['editorBracketHighlight.foreground3'] = palette.bracket3;
                themeContent.colors['editorBracketHighlight.foreground4'] = palette.bracket4;
                // Ensure bracket match uses a visible accent
                themeContent.colors['editorBracketMatch.border'] = palette.bracket1;
            } catch (e) {
                console.warn('⚠️ Failed to read palette.json:', e.message);
            }
        }
    if (!themeContent.name || !themeContent.colors || !themeContent.tokenColors) {
            throw new Error('Invalid theme structure');
        }
        console.log(`✅ ${themeName} - Valid`);
    } catch (error) {
        console.error(`❌ ${themeName} - Invalid JSON: ${error.message}`);
        allThemesValid = false;
    }
});

if (allThemesValid) {
    console.log('🎉 All BoxLang themes are valid and ready!');
    console.log('📦 Ready to package extension');
} else {
    console.error('💥 Some themes have issues. Please fix before packaging.');
    process.exit(1);
}
