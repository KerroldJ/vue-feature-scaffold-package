# Contributing to Vue Feature Scaffold

Thank you for your interest in contributing! This project follows **Git Flow** workflow to maintain code quality and organization.

## 🌿 Git Flow Workflow

We use Git Flow with the following branch structure:

- **`main`** - Production-ready code (stable releases only)
- **`dev`** - Development branch (all PRs merge here first)
- **`feature/*`** - New features (e.g., `feature/add-pinia-store`)
- **`fix/*`** - Bug fixes (e.g., `fix/duplicate-folder-check`)
- **`hotfix/*`** - Urgent production fixes (merge to both `main` and `dev`)

### Branch Naming Convention

```bash
# New features
feature/<feature-name>
# Examples:
feature/add-pinia-store
feature/add-custom-templates
feature/interactive-mode

# Bug fixes
fix/<issue-description>
# Examples:
fix/duplicate-folder-check
fix/template-rendering
fix/typescript-errors

# Hotfixes (urgent production bugs)
hotfix/<critical-issue>
# Examples:
hotfix/security-vulnerability
hotfix/cli-crash
```

## 📋 Contribution Process

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/vue-feature-scaffold-package.git
cd vue-feature-scaffold-package
```

### 2. Set Up Development Environment

```bash
# Add upstream remote
git remote add upstream https://github.com/KerroldJ/vue-feature-scaffold-package.git

# Install dependencies
npm install

# Build the project
npm run build

# Link locally for testing
npm link
```

### 3. Create Your Branch

**For new features:**

```bash
# Switch to dev branch
git checkout dev

# Pull latest changes
git pull upstream dev

# Create feature branch
git checkout -b feature/your-feature-name
```

**For bug fixes:**

```bash
# Switch to dev branch
git checkout dev

# Pull latest changes
git pull upstream dev

# Create fix branch
git checkout -b fix/issue-description
```

### 4. Make Your Changes

```bash
# Make your changes
# Edit files in src/ or templates/

# Build to test
npm run build

# Test locally
npm link
vue-feature-scaffold generate test --dir test-output

# Or test with npm script
npm run generate test -- --dir test-output
```

### 5. Commit Your Changes

Follow **Conventional Commits** format:

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add pinia store generation option"
git commit -m "fix: prevent duplicate folder creation"
git commit -m "docs: update README with new examples"
git commit -m "refactor: improve string transformation logic"
```

**Commit message types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `refactor:` - Code refactoring (no feature change)
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `style:` - Code style/formatting

### 6. Push to Your Fork

```bash
# Push your branch
git push origin feature/your-feature-name
# or
git push origin fix/issue-description
```

### 7. Create Pull Request

1. Go to your fork on GitHub
2. Click **"New Pull Request"**
3. **Base repository:** `KerroldJ/vue-feature-scaffold-package`
4. **Base branch:** `dev` (Important: Always PR to `dev`, not `main`)
5. **Compare branch:** Your feature/fix branch
6. Fill in the PR template:

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix (fix/\*)
- [ ] New feature (feature/\*)
- [ ] Breaking change
- [ ] Documentation update

## Testing

How did you test this?

## Checklist

- [ ] Code builds without errors
- [ ] Tested locally with `npm link`
- [ ] Updated documentation if needed
- [ ] Follows project coding standards
```

### 8. Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged to `dev`
4. Your changes will be included in the next release to `main`

## 🛠️ Development Setup

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

**Only maintainers can publish to npm.**

### Version Management

```bash
# Patch release (bug fixes): 0.1.0 -> 0.1.1
npm version patch

# Minor release (new features): 0.1.0 -> 0.2.0
npm version minor

# Major release (breaking changes): 0.1.0 -> 1.0.0
npm version major
```

### Publishing Steps

1. Ensure all changes are merged to `dev`
2. Test thoroughly on `dev` branch
3. Merge `dev` to `main`:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   ```
4. Update version: `npm version patch|minor|major`
5. Build: `npm run build`
6. Publish: `npm publish`
7. Push tags: `git push --tags`
8. Merge `main` back to `dev`:
   ```bash
   git checkout dev
   git merge main
   git push origin dev
   ```

## 🚀 Release Process

### Regular Release (dev → main)

1. Feature/fix PRs merge to `dev`
2. Test on `dev` branch
3. When ready for release, merge `dev` to `main`
4. Tag version on `main`
5. Publish to npm
6. Merge `main` back to `dev`

### Hotfix Release (hotfix → main + dev)

For critical production bugs:

```bash
# Create hotfix from main
git checkout main
git checkout -b hotfix/critical-issue

# Fix the issue
# Commit and test

# Merge to main
git checkout main
git merge hotfix/critical-issue
npm version patch
npm publish

# Merge to dev
git checkout dev
git merge hotfix/critical-issue

# Delete hotfix branch
git branch -d hotfix/critical-issue
```

## 📦 Project Structure

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

## Code Style

- Use TypeScript for all source files
- Follow existing patterns in templates
- Add JSDoc comments for public functions
- Use ESLint for linting

## 💡 Adding CLI Options

1. Add option to `program.command()` in `src/cli.ts`
2. Update `FeatureOptions` interface in `src/types/index.ts`
3. Handle option in `src/generators/featureGenerator.ts`
4. Update README.md with the new option
5. Submit PR to `dev` branch

## 🐛 Reporting Issues

Found a bug? Please create an issue with:

1. **Title:** Clear, descriptive summary
2. **Description:** Steps to reproduce
3. **Expected behavior**
4. **Actual behavior**
5. **Environment:** OS, Node version, package version
6. **Screenshots/logs** if applicable

## ❓ Questions?

- Open a [GitHub Discussion](https://github.com/KerroldJ/vue-feature-scaffold-package/discussions)
- Create an issue with the `question` label

## 📜 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other contributors

---

Thank you for contributing! 🎉
