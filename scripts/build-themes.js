#!/usr/bin/env node

const fs = require( 'fs' );
const path = require( 'path' );

console.log( '🎨 Building BoxLang Themes...' );

// Verify all theme files exist
const themeDir = path.join( __dirname, '..', 'themes' );
const expectedThemes = [
    'boxlang-dark-neon.json',
    'boxlang-light.json'
];

let allThemesValid = true;

expectedThemes.forEach( themeName => {
    const themePath = path.join( themeDir, themeName );
    if ( !fs.existsSync( themePath ) ) {
        console.error( `❌ Missing theme file: ${themeName}` );
        allThemesValid = false;
        return;
    }

    try {
        let themeContent = JSON.parse( fs.readFileSync( themePath, 'utf8' ) );

        // Basic validation
        if ( !themeContent.name || !themeContent.colors || !themeContent.tokenColors ) {
            console.error( `❌ Invalid theme structure in ${themeName}` );
            allThemesValid = false;
            return;
        }

        console.log( `✅ ${themeName} - Valid` );
    } catch ( error ) {
        console.error( `❌ Failed to parse ${themeName}: ${error.message}` );
        allThemesValid = false;
    }
} );

if ( allThemesValid ) {
    console.log( '🎉 All BoxLang themes are valid and ready!' );
    console.log( '📦 Ready to package extension' );
} else {
    console.log( '💥 Some themes have issues. Please fix before packaging.' );
    process.exit( 1 );
}
