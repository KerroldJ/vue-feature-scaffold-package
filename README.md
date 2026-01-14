# Vue Feature Scaffold

🚀 A powerful CLI tool to generate feature-based Vue.js architecture for **any Vue.js project** with TypeScript support.

**Optimized for Laravel + Inertia.js, but works with any Vue.js stack!**

## ✨ Features

- 🎯 **Feature-based architecture** - Self-contained, modular Vue components
- 📝 **Pure comment templates** - Maximum flexibility with comprehensive examples
- 🔷 **TypeScript first** - Full type safety out of the box
- ⚡ **Framework agnostic** - Works with Laravel, Nuxt, Vite, Vue CLI, or any Vue.js project
- 🎨 **Customizable** - Adapt generated code to your needs
- 🛡️ **Safe generation** - Directory validation prevents accidents

## 🎯 Use Cases

This CLI works with **any Vue.js project**:

- ✅ **Laravel + Inertia.js** (Primary focus)
- ✅ **Nuxt.js** projects
- ✅ **Vite + Vue** projects
- ✅ **Vue CLI** projects
- ✅ **Standalone Vue.js** apps
- ✅ **Quasar**, **Vuetify**, or any Vue framework
- ✅ **Existing projects** - Add features to any Vue codebase

## 📦 Installation

### Recommended: Install Per Project (Local Dependency)

```bash
# Navigate to your project
cd your-project

# Install as dev dependency
npm install --save-dev vue-feature-scaffold

# Use with npx (no global installation needed)
npx vue-feature generate users --dir resources/js/pages

# Or add to package.json scripts
```

**Add to your project's `package.json`:**

```json
{
  "scripts": {
    "generate": "vue-feature generate"
  }
}
```

**Then use it:**

```bash
# Generate features in your project
npm run generate users -- --dir resources/js/pages
npm run generate products -- --dir src/features
```

### Alternative: Global Installation (Not Recommended)

If you prefer global installation:

```bash
npm install -g vue-feature-scaffold
vue-feature generate users --dir resources/js/pages
```

**Why local is better:**

- ✅ Each project has its own version
- ✅ Version controlled in `package.json`
- ✅ Team members get it with `npm install`
- ✅ No conflicts between projects
- ✅ Works in CI/CD pipelines

Then use it in **any project** on that machine:

```bash
# Laravel + Inertia.js project
cd ~/projects/laravel-blog
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages

# Nuxt.js project
cd ~/projects/nuxt-ecommerce
mkdir -p pages/admin
vue-feature generate products --dir pages/admin

# Vite + Vue project
cd ~/projects/vue-dashboard
mkdir -p src/features
vue-feature generate analytics --dir src/features

# Vue CLI project
cd ~/work/company-app
mkdir -p src/modules
vue-feature generate customers --dir src/modules

# Any Vue.js project
cd ~/projects/my-vue-app
mkdir -p src/components/features
vue-feature generate orders --dir src/components/features
```

**Once installed globally, the `vue-feature` command works with ANY Vue.js project on your system!**

### For Local Development/Testing (Before Publishing)

**This section is only for:**

- You (the package developer) testing before publishing

#### Option 1: npm link (Makes it globally available on YOUR machine only)

````bash
# In the vue-feature-scaffold directory
npm install
npm run build
sudo npm link  # Links it globally on YOUR computer

# Now you can use it anywhere on YOUR machine (not published yet)
cd ~/projects/any-project
vue-feature generate users --dir src/features

# Other people can't use it yet - only you can until you publish to npm
```o npm link

# Now use globally
cd your-project
vue-feature generate users --dir src/features
````

#### Option 2: npm run generate (No sudo needed - Recommended)

```bash
# In the vue-feature-scaffold directory
npm install
npm run build

# Generate features using npm script
mkdir -p output
npm run generate users -- --dir output
```

#### Option 3: node directly

```bash
# In the vue-feature-scaffold directory
npm install
npm run build

# Use node to run the CLI
mkdir -p output
node dist/cli.js generate users --dir output
```

#### Option 4: Use from different directory

````bash
# From your Laravel project
## 🚀 Quick Start

### Scenario 1: After Publishing to npm (Worldwide Availability)

**Anyone in the world can do this:**

```bash
# 1. Install once on their machine
npm install -g vue-feature-scaffold

# 2. Use in any project on their system
cd ~/my-project
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages

# The command works globally across all projects on their machine!
````

### Scenario 2: Before Publishing (Local Development Only)

**Only you can use it (not published yet):**

# Run from vue-feature-scaffold location

node /path/to/vue-feature-scaffold/dist/cli.js generate users --dir resources/js/pages

````

## 🚀 Quick Start

### If Installed Globally (After npm publish)

```bash
# 1. Navigate to your Laravel project
cd your-laravel-project

# 2. Create output directory
mkdir -p resources/js/pages

# 3. Generate a feature
vue-feature generate users --dir resources/js/pages

# 4. Customize generated files
# Open resources/js/pages/users/Index.vue and uncomment examples!
````

### If Using Locally (Before publishing)

```bash
# 1. In vue-feature-scaffold directory, build it
npm install && npm run build

# 2. Navigate to your project
cd /path/to/your-laravel-project

# 3. Create output directory
mkdir -p resources/js/pages

# 4. Generate using one of these methods:

# Method A: If linked globally (sudo npm link)
vue-feature generate users --dir resources/js/pages

# Method B: Using npm run from vue-feature-scaffold directory
cd /path/to/vue-feature-scaffold
npm run generate users -- --dir /path/to/your-laravel-project/resources/js/pages

# Method C: Using node directly
node /path/to/vue-feature-scaffold/dist/cli.js generate users --dir /path/to/your-laravel-project/resources/js/pages
```

### 5. Customize Generated Files

All generated files contain **commented examples**. Open them, uncomment the pattern that fits your needs, and customize!

## 📖 Usage

### Basic Command

```bash
vue-feature generate <feature-name> [options]
```

### Options

| Option         | Description                       | Default |
| -------------- | --------------------------------- | ------- |
| `--dir <path>` | Output directory (**must exist**) | `src/`  |
| `--no-table`   | Skip table component generation   | `false` |
| `--no-form`    | Skip form component generation    | `false` |
| `--store`      | Add Pinia store (coming soon)     | `false` |

### Examples

```bash
# ============================================================================
# USING npm run (Recommended - after adding script to package.json)
# ============================================================================

# Laravel + Inertia.js
npm run generate users -- --dir resources/js/pages
npm run generate products -- --dir resources/js/pages/admin

# Nuxt.js
npm run generate posts -- --dir pages/blog
npm run generate dashboard -- --dir pages/admin --no-table --no-form

# Vite + Vue
npm run generate analytics -- --dir src/features
npm run generate reports -- --dir src/modules --no-form

# Vue CLI
npm run generate customers -- --dir src/views/crm
npm run generate inventory -- --dir src/components/features

# ============================================================================
# USING npx (No package.json script needed)
# ============================================================================

# Laravel
npx vue-feature generate users --dir resources/js/pages

# Nuxt
npx vue-feature generate posts --dir pages/blog

# Vite
npx vue-feature generate dashboard --dir src/features

# ============================================================================
# WITH OPTIONS
# ============================================================================

# Skip table component
npm run generate dashboard -- --dir src/features --no-table

# Skip form component
npm run generate reports -- --dir src/features --no-form

# Minimal feature (no table, no form)
npm run generate analytics -- --dir src/features --no-table --no-form
```

### Local Development (Before Publishing)

```bash
# Build
npm run build

# Option 1: Use npm script (recommended)
npm run generate users -- --dir output

# Option 2: Use node directly
node dist/cli.js generate users --dir output

# Option 3: Link globally for testing
npm link
vue-feature generate users --dir output
```

## 📁 Generated Structure

When you run `vue-feature generate users --dir resources/js/pages`, you get:

```
resources/js/pages/
└── users/
    ├── Index.vue                    # Main feature entry component
    ├── components/
    │   ├── UsersTable.vue          # Data table component
    │   └── UsersForm.vue           # Create/edit form
    ├── composables/
    │   └── useUsers.ts             # State management & business logic
    ├── services/
    │   └── usersApi.ts             # API communication layer
    └── types.ts                     # TypeScript interfaces
```

### 📝 What's Inside Each File

All generated files are **pure comments** with comprehensive examples:

#### `Index.vue` - Main Entry Component

- 🎨 List view with CRUD operations
- 📊 Dashboard with stats
- 🔗 Inertia.js integration examples (for Laravel)
- 📱 Multiple layout patterns
- 🎯 Adaptable to any Vue.js framework

## 🔗 Framework Integration Examples

### Laravel + Inertia.js (Primary)

- **Table.vue**: Data display with sorting, filtering examples
- **Form.vue**: Create/edit forms with validation patterns
- Works with any UI library (Vuetify, PrimeVue, Element Plus, etc.)

#### `composables/useFeature.ts` - State Management

- 📦 Full CRUD implementation example
- ⚡ Reactive state management
- 🔄 Loading and error handling
- 🎯 Compatible with Pinia, Vuex, or standalone composables

#### `services/featureApi.ts` - API Layer

- 🌐 RESTful API functions
- 📡 Axios integration examples (easily swap with fetch, ky, etc.)
- 🔒 Authentication handling
- 📥 Works with any backend (Laravel, Express, Django, etc.)

#### `types.ts` - TypeScript Definitions

- 🔷 Entity interfaces
- 📋 Request/response types
- 🎯 Framework-agnostic types
- ✅ Type-safe examples

## 🔗 Laravel Integration

### Complete Setup Guide

#### Step 1: Install in Your Laravel Project

```bash
cd your-laravel-project
npm install --save-dev vue-feature-scaffold
```

Add to `package.json`:

```json
{
  "scripts": {
    "generate": "vue-feature generate"
  }
}
```

#### Step 2: Generate Feature in Your Laravel Project

```bash
mkdir -p resources/js/pages
npm run generate users -- --dir resources/js/pages

# Or use npx
npx vue-feature generate users --dir resources/js/pages
```

#### Step 3: Register Routes

**routes/web.php:**

```php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
```

#### Step 4: Create Controller

**app/Http/Controllers/UserController.php:**

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('users/Index', [
            'users' => User::all(),
        ]);
    }
}
```

#### Step 5: Customize Generated Files

Open `resources/js/pages/users/Index.vue` and uncomment the Inertia.js example!

### Real-World Usage Example

### Real-World Usage Example

```bash
# 1. In your Laravel project root
cd ~/projects/my-laravel-app

# 2. Install the package
npm install --save-dev vue-feature-scaffold

# 3. Add script to package.json
# "scripts": { "generate": "vue-feature generate" }

# 4. Generate user management feature
npm run generate users -- --dir resources/js/pages

# 5. Generate product catalog feature
npm run generate products -- --dir resources/js/pages

# 6. Generate dashboard (no table/form needed)
npm run generate dashboard -- --dir resources/js/pages --no-table --no-form

# 7. Build your assets
npm run dev
```

**Your `package.json` will look like:**

````json
{
  "devDependencies": {
    "vue-feature-scaffold": "^0.1.0",
    "@vitejs/plugin-vue": "^4.0.0",
    "laravel-vite-plugin": "^0.7.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "generate": "vue-feature generate"
  }
}
``` Expected API Structure

#### Nuxt.js

```bash
cd your-nuxt-project
npm install --save-dev vue-feature-scaffold

# Add to package.json: "generate": "vue-feature generate"

npm run generate posts -- --dir pages/blog
npm run generate admin -- --dir pages/admin
````

**Usage:** Place generated features in `pages/` or `components/` directory, uncomment examples, and adapt to Nuxt's conventions (useAsyncData, useFetch, etc.)

#### Vite + Vue

```bash
cd your-vite-project
npm install --save-dev vue-feature-scaffold

npm run generate users -- --dir src/features
npm run generate dashboard -- --dir src/modules
```

**Usage:** Import generated components in your Vue Router setup. The API layer works with axios or fetch.

#### Vue CLI

```bash
cd your-vue-cli-project
npm install --save-dev vue-feature-scaffold

npm run generate customers -- --dir src/views/crm
```

**Usage:** Generated features integrate seamlessly with Vue Router and your existing structure.

#### Quasar / Vuetify / PrimeVue

```bash
npm install --save-dev vue-feature-scaffold
npm run generate products -- --dir src/features
```

**Usage:** Uncomment the generated examples and replace with your UI library components (QTable, VDataTable, DataTable, etc.)

````

**Usage:** Import generated components in your Vue Router setup. The API layer works with axios or fetch.

#### Vue CLI

```bash
cd your-vue-cli-project
vue-feature generate customers --dir src/views/crm
````

**Usage:** Generated features integrate seamlessly with Vue Router and your existing structure.

#### Quasar / Vuetify / PrimeVue

```bash
vue-feature generate products --dir src/features
```

**Usage:** Uncomment the generated examples and replace with your UI library components (QTable, VDataTable, DataTable, etc.)

## 📚 Documentation

### Command Not Found?

If you get `vue-feature: command not found`:

**Solution 1: Use npm run (Recommended)**

```bash
# Make sure you installed it first
npm install --save-dev vue-feature-scaffold

# Add script to package.json
# "scripts": { "generate": "vue-feature generate" }

# Then use it
npm run generate users -- --dir resources/js/pages
```

**Solution 2: Use npx**

```bash
npx vue-feature generate users --dir resources/js/pages
```

**Solution 3: Check installation**

````bash
# Verify it's in package.json
cat package.json | grep vue-feature-scaffold
### Team Collaboration

When working with a team:

```bash
# Developer A sets it up
cd project
npm install --save-dev vue-feature-scaffold

# Commits package.json with the dependency

# Developer B clones and installs
git clone project
npm install  # Gets vue-feature-scaffold automatically

# Everyone can now use it
npm run generate users -- --dir resources/js/pages
````

**Benefits:**

- ✅ Same version for all team members
- ✅ Locked version in `package-lock.json`
- ✅ No global installation needed
- ✅ CI/CD pipelines work automaticallyve three options:

**Option 1: Use sudo for npm link (Linux/Mac)**

```bash
cd /path/to/vue-feature-scaffold
sudo npm link
```

**Option 2: Use npm run (No sudo needed)**

```bash
cd /path/to/vue-feature-scaffold
npm run generate users -- --dir /path/to/output
```

**Option 3: Use node directly**

```bash
cd /path/to/vue-feature-scaffold
node dist/cli.js generate users --dir /path/to/output
```

### Using in Different Projects

If you haven't published to npm yet, here's how to use it across multiple projects:

**Approach 1: Global link (one-time setup)**

### Publishing Steps

When ready to make it available on npm:

```bash
# 1. Update package.json with unique name if needed
# Check if name is available: npm search vue-feature-scaffold

# 2. Build the package
npm run build

# 3. Test locally in a test project
cd /tmp/test-project
npm init -y
npm install --save-dev /path/to/vue-feature-scaffold
npx vue-feature generate test -- --dir .

# 4. Login to npm (one-time, creates your npmjs.com account link)
npm login

# 5. Publish to npm (makes it available WORLDWIDE)
npm publish

# 6. Now ANYONE can install it in their project
cd their-project
npm install --save-dev vue-feature-scaffold
npm run generate users -- --dir resources/js/pages
```

When ready to make it available worldwide:

````bash
# 1. Update package.json with unique name if needed
# Check if name is available: npm search vue-feature-scaffold

# 2. Build the package
npm run build
### After Publishing

Developers worldwide can add it to their projects:

```bash
# Project A (Laravel)
cd ~/projects/laravel-app
npm install --save-dev vue-feature-scaffold

# Project B (Nuxt)
cd ~/projects/nuxt-app
npm install --save-dev vue-feature-scaffold

# Project C (Vite + Vue)
cd ~/work/vite-app
npm install --save-dev vue-feature-scaffold

### Updating Your Package

```bash
# 1. Make changes to your code
# 2. Update version in package.json (e.g., 0.1.0 -> 0.1.1)
npm version patch  # or minor, or major

# 3. Build and publish
npm run build
npm publish

# 4. Projects update with:
cd their-project
npm update vue-feature-scaffold

# Or specify version
npm install --save-dev vue-feature-scaffold@latest
```d

# Developer in Brazil
npm install -g vue-feature-scaffold

# All can use: vue-feature generate <name> --dir <path>
````

### Updating Your Package

````bash
# 1. Make changes to your code
# 2. Update version in package.json (e.g., 0.1.0 -> 0.1.1)
npm version patch  # or minor, or major

# 3. Build and publish
npm run build
npm publish

# 4. Users update with:
npm update -g vue-feature-scaffold
```. Test locally first
npm link
vue-feature generate test --dir /tmp/test

# 4. Login to npm (one-time)
npm login

# 5. Publish
npm publish

# 6. Verify installation
npm install -g vue-feature-scaffold
vue-feature generate users --dir test
````

After publishing, users can simply:

```bash
npm install -g vue-feature-scaffold
vue-feature generate <feature> --dir <path>
```

cd your-laravel-project
echo 'node /path/to/vue-feature-scaffold/dist/cli.js generate "$@"' > generate-feature.sh
chmod +x generate-feature.sh

# Use it

./generate-feature.sh users --dir resources/js/pages

```

### Pure Comment Templates

Generated files contain **only comments** with examples. This is intentional to give you maximum flexibility:

1. Open the generated file
2. Find the example that matches your needs
3. Uncomment it
4. Customize it for your use case

No opinionated code is forced on you!
└── examples/                  # Working examples
```

## 🙏 Acknowledgments

Built for **all Vue.js developers** - whether you're using Laravel, Nuxt, Vite, or any Vue.js framework.

Optimized for Laravel + Inertia.js, but designed to work everywhere.

---

**Made with ❤️ for the Vue.js community**

# Verify generated files

ls -la test-output/test-feature/

````

## ⚠️ Important Notes

### Directory Must Exist

The CLI validates that the output directory exists before generating files. This prevents accidental file creation in wrong locations.

```bash
# ❌ This will fail
vue-feature generate users --dir nonexistent/path

# ✅ Do this instead
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages
````

### Pure Comment Templates

Generated files contain **only comments** with examples. This is intentional to give you maximum flexibility:

1. Open the generated file
2. Find the example that matches your needs
3. Uncomment it
4. Customize it for your use case

No opinionated code is forced on you!

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

MIT

## 🙏 Acknowledgments

Built for Laravel developers who love Vue.js and feature-based architecture.

---

**Made with ❤️ for the Laravel + Vue.js community**

```bash
# Install dependencies
npm install

# Build
npm run build

# Development mode (watch)
npm run dev

# Test locally
npm link
```

## Laravel Integration

The generated features expect Laravel API endpoints following RESTful conventions:

```php
Route::apiResource('users', UserController::class);
```

Endpoints:

- `GET /api/users` - List all
- `GET /api/users/{id}` - Get single
- `POST /api/users` - Create
- `PUT /api/users/{id}` - Update
- `DELETE /api/users/{id}` - Delete

## License

MIT
