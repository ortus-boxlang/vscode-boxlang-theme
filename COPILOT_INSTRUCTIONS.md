# Copilot Instructions for BoxLang Theme Repo

Please follow these rules when suggesting edits or completions for JavaScript/TypeScript files in this repository:

- Always enforce spacing for readability:
  - Space inside parentheses: `( foo )` not `(foo)`
  - Space around binary/infix operators: `a + b` not `a+b`
  - Space after commas: `fn(a, b, c)`
  - Space inside array and object brackets: `[ 1, 2 ]`, `{ key: value }`
  - Space before function parenthesis: `function foo (bar) {}`
- Prefer using palette tokens from `themes/palette.json` when modifying theme colors (do not hardcode hexes unless adding a new palette color).
- When adding bracket/paren highlighting use the `editorBracketHighlight.foreground1..4` pattern.
- Keep semantic token names (variable, function, class, keyword, string, comment) mapped to palette keys.

If you generate code, ensure ESLint rules in `.eslintrc.json` are satisfied.
