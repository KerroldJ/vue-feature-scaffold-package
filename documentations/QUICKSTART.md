# Quick Start Guide

## For Users (Installing from npm)

### Installation

```bash
npm install -g vue-feature-scaffold
```

### Generate Your First Feature

```bash
# Navigate to your Laravel project root
cd my-laravel-app

# Generate a feature in Laravel's resources directory
vue-feature generate users --dir resources/js/pages

# Or generate in a specific module structure
vue-feature generate employees --dir modules/HRIS/resources/js/pages
```

This creates:

```
src/users/
  ├── Index.vue              # Flexible template with Inertia.js + AppLayout
  ├── components/
  │   ├── UsersTable.vue    # Ready-to-use table component
  │   └── UsersForm.vue     # Ready-to-use form component
  ├── composables/
  │   └── useUsers.ts       # State management & API logic
  ├── services/
  │   └── usersApi.ts       # API communication layer
  └── types.ts              # TypeScript interfaces
```

**Index.vue** includes:

- Inertia.js integration with `<Head>` and `AppLayout`
- Breadcrumb navigation
- Placeholder sections for customization
- Commented-out composable code (activate when needed)
- Flexible layout - use it for forms, tables, dashboards, or custom views

### Integrate with Laravel Routes (Inertia.js)

```php
// routes/web.php
use Inertia\Inertia;

Route::get('/users', function () {
    return Inertia::render('users/Index');
})->name('users.index');
```

Or with Vue Router:

```typescript
// router/index.ts
import UsersIndex from "@/users/Index.vue";

const routes = [
  {
    path: "/users",
    name: "users",
    component: UsersIndex,
  },
];
```

### Laravel Backend Setup

```php
// routes/api.php
Route::apiResource('users', UserController::class);
```

---

## For Developers (Contributing)

### Setup Development Environment

```bash
# Clone the repo
git clone <repo-url>
cd lavarel-vue-feature-based-architecture

# Install dependencies
npm install

# Build
npm run build

# Link for local testing
npm link
```

### Test Your Changes

```bash
# Method 1: Use the test script
./test.sh

# Method 2: Manual test
node dist/cli.js generate products --dir examples

# Method 3: Test as installed package
cd /tmp/test-project
vue-feature generate orders
```

### Development Workflow

1. Make changes in `src/` or `templates/`
2. Run `npm run build` (or `npm run dev` for watch mode)
3. Test with `node dist/cli.js generate <feature-name>`
4. Check generated files in test output

### Common Tasks

**Add a new CLI option:**

1. Update `src/cli.ts` - add the option
2. Update `src/types/index.ts` - add to FeatureOptions
3. Update `src/generators/featureGenerator.ts` - handle the option
4. Update `README.md` - document it

**Modify a template:**

1. Edit the template file in `templates/`
2. Use placeholders: `{{FEATURE_PASCAL}}`, `{{FEATURE_CAMEL}}`, etc.
3. Rebuild: `npm run build`
4. Test generation

**Add a new template file:**

1. Create `templates/NewFile.template`
2. Add generation logic in `src/generators/featureGenerator.ts`
3. Call `generateFromTemplate()` with appropriate parameters

### Before Publishing

```bash
# 1. Update version
npm version patch  # or minor/major

# 2. Build
npm run build

# 3. Test thoroughly
npm link
vue-feature generate testFeature

# 4. Publish
npm publish
```

---

## Troubleshooting

**CLI not found after npm link:**

```bash
npm unlink -g vue-feature-scaffold
npm link
```

**Changes not reflected:**

```bash
npm run build  # Rebuild after changes
```

**Permission errors on Unix/Linux:**

```bash
chmod +x dist/cli.js
```
