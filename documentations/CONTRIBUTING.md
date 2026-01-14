# Contributing to Vue Feature Scaffold

## Development Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd lavarel-vue-feature-based-architecture
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Link locally for testing:

```bash
npm link
```

5. Test in another directory:

```bash
cd /path/to/test-project
vue-feature generate products
```

## Project Structure

```
├── src/
│   ├── cli.ts                    # CLI entry point (commander.js)
│   ├── index.ts                  # Package exports
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── generators/
│   │   └── featureGenerator.ts   # Main feature generation logic
│   └── utils/
│       ├── stringHelpers.ts      # String transformations
│       └── fileHelpers.ts        # File system operations
├── templates/                     # Vue template files
│   ├── Index.vue.template
│   ├── Table.vue.template
│   ├── Form.vue.template
│   ├── useComposable.ts.template
│   ├── api.ts.template
│   └── types.ts.template
├── dist/                          # Compiled JavaScript (generated)
└── test-output/                   # Generated test features (gitignored)
```

## Adding New Templates

1. Create a new `.template` file in `templates/`
2. Use placeholders: `{{FEATURE_NAME}}`, `{{FEATURE_PASCAL}}`, `{{FEATURE_CAMEL}}`, `{{FEATURE_KEBAB}}`
3. Add generation logic in `src/generators/featureGenerator.ts`
4. Update tests

## Template Placeholders

- `{{FEATURE_NAME}}` - Original input (e.g., "user-profile")
- `{{FEATURE_PASCAL}}` - PascalCase (e.g., "UserProfile")
- `{{FEATURE_CAMEL}}` - camelCase (e.g., "userProfile")
- `{{FEATURE_KEBAB}}` - kebab-case (e.g., "user-profile")

## Testing

```bash
# Run tests
npm test

# Test CLI locally with npm script (recommended for development)
npm run generate testFeature -- --dir test-output

# Test with Laravel-style paths
npm run generate users -- --dir resources/js/pages
npm run generate employees -- --dir /resources/js/pages

# Use test script
./test.sh

# Or use node directly
node dist/cli.js generate testFeature --dir test-output
```

## Publishing

1. Update version in `package.json`
2. Build: `npm run build`
3. Test: `npm link && vue-feature generate test`
4. Publish: `npm publish`

## Code Style

- Use TypeScript for all source files
- Follow existing patterns in templates
- Add JSDoc comments for public functions
- Use ESLint for linting

## Adding CLI Options

1. Add option to `program.command()` in `src/cli.ts`
2. Update `FeatureOptions` interface in `src/types/index.ts`
3. Handle option in `src/generators/featureGenerator.ts`
4. Update README.md with the new option
