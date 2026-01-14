# Usage Examples

## ⚠️ Important: Directory Must Exist

**The output directory must exist before running the generator.** The CLI validates the path and will throw an error if it doesn't exist. This prevents accidental file generation in wrong locations.

```bash
# ✅ Correct: Create directory first
mkdir -p resources/js/pages
npm run generate users -- --dir resources/js/pages

# ❌ Wrong: Directory doesn't exist
npm run generate users -- --dir nonexistent/path
# Error: Output directory 'nonexistent/path' does not exist.
```

---

## Local Development (Before Publishing to npm)

When developing the CLI tool locally, use the npm script:

```bash
# Build first
npm run build

# Generate features using npm script
npm run generate <feature-name> -- --dir <path>
```

### Examples

```bash
# Basic usage
npm run generate users -- --dir src

# Laravel resources folder
npm run generate products -- --dir resources/js/pages

# Nested module structure
npm run generate employees -- --dir HRIS/web-admin/resources/js/pages

# Without table component
npm run generate posts -- --dir src --no-table

# Without form component
npm run generate categories -- --dir src --no-form
```

**Note:** The `--` before options is required when using npm scripts to pass arguments to the underlying command.

---

## After Publishing to npm

Once published to npm and installed globally, use the CLI directly:

```bash
# Install globally
npm install -g vue-feature-scaffold

# Use directly
vue-feature generate users --dir resources/js/pages
```

---

## Common Laravel Project Structures

### Standard Laravel with Inertia.js

```bash
vue-feature generate users --dir resources/js/Pages
vue-feature generate products --dir resources/js/Pages
```

### Laravel with Custom Vue Structure

```bash
vue-feature generate users --dir resources/js/features
vue-feature generate orders --dir resources/js/modules
```

### Modular Laravel (Multi-tenant/Multi-module)

```bash
# HRIS Module
vue-feature generate employees --dir modules/HRIS/resources/js/pages

# CRM Module
vue-feature generate customers --dir modules/CRM/resources/js/pages

# Admin Panel
vue-feature generate users --dir admin/resources/js/pages
```

### Laravel with Monorepo Structure

```bash
vue-feature generate products --dir apps/web-admin/resources/js/pages
vue-feature generate reports --dir apps/dashboard/resources/js/features
```

---

## Testing Different Scenarios

### Test 1: Absolute Paths from Project Root

```bash
cd /path/to/laravel-project
npm run generate users -- --dir resources/js/pages
```

### Test 2: Relative Paths

```bash
# If you're already in resources/js
npm run generate users -- --dir pages

# If you're in the module folder
cd modules/HRIS
npm run generate employees -- --dir resources/js/pages
```

### Test 3: Deep Nesting

```bash
npm run generate settings -- --dir src/modules/admin/features/system/pages
```

---

## Generated Output

All commands generate the same structure:

```
<specified-dir>/<feature-name>/
├── Index.vue
├── components/
│   ├── <Feature>Table.vue
│   └── <Feature>Form.vue
├── composables/
│   └── use<Feature>.ts
├── services/
│   └── <feature>Api.ts
└── types.ts
```

### Example Output for: `npm run generate employees -- --dir HRIS/web-admin/resources/js/pages`

```
HRIS/web-admin/resources/js/pages/employees/
├── Index.vue
├── components/
│   ├── EmployeesTable.vue
│   └── EmployeesForm.vue
├── composables/
│   └── useEmployees.ts
├── services/
│   └── employeesApi.ts
└── types.ts
```

---

## Quick Reference

| Command Style                                      | When to Use                        |
| -------------------------------------------------- | ---------------------------------- |
| `npm run generate <feature> -- --dir <path>`       | Local development, testing         |
| `node dist/cli.js generate <feature> --dir <path>` | Direct node execution              |
| `vue-feature generate <feature> --dir <path>`      | After `npm link` or global install |

---

## Troubleshooting

**Q: Can I use absolute paths?**
A: Yes, but the CLI works from the current directory. Use relative paths from your project root.

**Q: What if the folder doesn't exist?**
A: **The CLI now requires the directory to exist.** Create it first with `mkdir -p <path>`, then run the generator. This prevents accidental file generation in wrong locations.

```bash
# Create the directory first
mkdir -p resources/js/pages

# Then generate
vue-feature generate users --dir resources/js/pages
```

**Q: Can I use forward slashes on Windows?**
A: Yes, the CLI handles path separators automatically.

**Q: Do I need to be in a Laravel project?**
A: No, but the generated code expects Laravel API endpoints.

**Q: I get "Directory does not exist" error**
A: Create the output directory first. The CLI validates paths to prevent mistakes:

```bash
mkdir -p your/desired/path
vue-feature generate <feature> --dir your/desired/path
```
