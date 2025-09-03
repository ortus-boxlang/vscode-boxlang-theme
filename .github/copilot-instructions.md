# Copilot / AI Agent Instructions — vscode-boxlang-theme

Short: this repo is a Visual Studio Code color theme extension. Be pragmatic: modify themes under `themes/`, update `themes/palette.json` for shared colors, and keep `scripts/build-themes.js` happy (it validates theme structure and injects bracket colors).

Key files to read before editing
- `package.json` — lists contributed themes and npm scripts.
- `themes/palette.json` — single source of truth for repeated hex values. Prefer adding palette keys instead of hardcoding hexes.
- `themes/*.json` — theme definitions. Every theme must have: `name`, `type`, `semanticHighlighting`, `colors`, and `tokenColors`.
- `scripts/build-themes.js` — build-time injector and validator. The script injects `editorBracketHighlight.foreground1..4`, sets background/foreground defaults and maps several semantic tokens from the palette.
- `scripts/open-dev-host.js` and `.vscode/launch.json` — how maintainers run an Extension Development Host for manual testing.

Big-picture patterns (what matters)
- This is not an app: themes are static JSON assets. Changes must keep valid JSON shape and VS Code theme keys.
- Centralize color choices in `themes/palette.json`. When adding a new thematic color, add a palette entry and use the build step to inject it.
- Bracket highlighting uses the `editorBracketHighlight.foreground1..4` cycle. Add these to `colors` or rely on the build script which injects them from the palette.
- Semantic colors should be set in `semanticTokenColors` (variable, function, class, keyword, string, comment, etc.). The build script will map several common tokens from the palette.

Concrete editing rules for AI suggestions
- Always prefer `palette.json` keys over new hex literals. If a new hex is required, add it to `themes/palette.json` and reference it in the build mapping.
- Follow the repo's spacing and formatting rules. See `.eslintrc.json` for the enforced JS spacing conventions (spaces in parens, around operators, array/object spacing). Run `npm run lint:fix` to autofix.
- When adding or changing a theme JSON:
  - Keep `name`, `type`, `semanticHighlighting`, `colors`, `tokenColors` present.
  - Ensure `tokenColors` contains an `Identifiers` entry if you add new variable/class scopes.
  - Avoid removing `editorBracketMatch` keys; prefer adding `editorBracketHighlight.foregroundN` entries.
  - Do not assume the palette injection; run `npm run build` locally to validate.

Developer workflows (explicit commands)
- Build & validate themes: `npm run build` (runs `scripts/build-themes.js`).
- Open Extension Dev Host: `npm run dev:host` or Run/Debug -> `Run Extension (test folder)` (uses `.vscode/launch.json`).
- Auto-fix JS style: `npm run lint:fix` (requires `eslint` installed via `npm install`).

Integration notes / gotchas
- `scripts/build-themes.js` will overwrite or inject bracket highlights and some semantic tokens on every build — don't rely on manual edits to those exact keys without updating `palette.json`.
- Theme validation is strict: missing `name`, `colors`, or `tokenColors` will fail the build. Always run `npm run build` after edits.
- VS Code does not support multiple presets inside one theme file — we ship separate JSON files for light/dark/preset variants.

Examples (from this repo)
- Palette usage: add `"newAccent": "#abc123"` to `themes/palette.json`, then update mappings in `scripts/build-themes.js` if you need that key to populate semantic tokens.
- Bracket cycle keys injected by build: `editorBracketHighlight.foreground1`, `...foreground2`, `...foreground3`, `...foreground4`.

If a suggestion would change behavior beyond visuals (tasks, packaging, or extension metadata), mention this explicitly in the PR description and run `npm run build` in CI or locally.

If anything here is unclear or misses a pattern you rely on, tell me which area (build, palette, theme JSON shape, or lint rules) and I'll expand the file accordingly.
