# How to Use Vue Feature Scaffold

## 🚀 Quick Start

### 1. Install Globally (Recommended for Production)

```bash
# Build the package
npm run build

# Link it globally (for local testing)
npm link

# Now use it anywhere
vue-feature generate users --dir src/features
```

### 2. Use Locally (For Development)

```bash
# In this project directory
npm run build

# Generate a feature using npm script
npm run generate users -- --dir resources/js/pages

# Or use node directly
node dist/cli.js generate products --dir src/features
```

---

## 📝 Command Syntax

```bash
vue-feature generate <feature-name> [options]
```

### Required Arguments

- `<feature-name>` - Name of the feature (e.g., `users`, `products`, `orders`)

### Options

- `--dir <path>` - Output directory (must exist before running)
- `--no-table` - Skip generating Table component
- `--no-form` - Skip generating Form component
- `--store` - Include Pinia store (coming soon)

---

## 💡 Usage Examples

### Example 1: Basic Feature Generation

```bash
# Create output directory first
mkdir -p resources/js/pages

# Generate users feature
vue-feature generate users --dir resources/js/pages
```

**Generated structure:**

```
resources/js/pages/
└── users/
    ├── Index.vue
    ├── components/
    │   ├── UsersTable.vue
    │   └── UsersForm.vue
    ├── composables/
    │   └── useUsers.ts
    ├── services/
    │   └── usersApi.ts
    └── types.ts
```

### Example 2: Generate Without Table Component

```bash
vue-feature generate products --dir src/features --no-table
```

### Example 3: Generate Without Form Component

```bash
vue-feature generate dashboard --dir src/features --no-form
```

### Example 4: Generate Minimal Feature (No Table, No Form)

```bash
vue-feature generate analytics --dir src/features --no-table --no-form
```

---

## 🎯 Real-World Laravel + Inertia.js Setup

### Step 1: Prepare Your Laravel Project

```bash
cd your-laravel-project

# Create directory for Vue features
mkdir -p resources/js/pages
```

### Step 2: Generate Feature

```bash
# Make sure you're in the vue-feature-scaffold directory
cd /path/to/vue-feature-scaffold

# Build if not already built
npm run build

# Generate the feature
npm run generate users -- --dir /path/to/your-laravel-project/resources/js/pages
```

### Step 3: Register Route in Laravel

**routes/web.php:**

```php
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
```

### Step 4: Create Controller

**app/Http/Controllers/UserController.php:**

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
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

### Step 5: Customize Generated Files

The generated files are **pure comments** - copy the examples and customize them:

1. Open `resources/js/pages/users/Index.vue`
2. Uncomment one of the examples (List View, Dashboard, Inertia.js, etc.)
3. Modify it for your needs
4. Do the same for other components

---

## 🔧 Local Testing Workflow

### Test the CLI Without Publishing

```bash
# 1. Build the project
npm run build

# 2. Link it globally
npm link

# 3. Test in a temporary directory
mkdir -p /tmp/test-feature
cd /tmp/test-feature
vue-feature generate orders --dir .

# 4. Check generated files
ls -la orders/
```

### Test with npm run generate

```bash
# From the vue-feature-scaffold directory
npm run build
npm run generate products -- --dir test-output
```

---

## 📦 Publishing to npm

### Before Publishing

1. **Choose a unique package name** (check npm):

```bash
npm search vue-feature-scaffold
# If taken, try: vue-feature-gen, laravel-vue-feature, etc.
```

2. **Update package.json:**

```json
{
  "name": "your-unique-name",
  "version": "0.1.0",
  "description": "CLI tool for generating feature-based Vue.js architecture for Laravel projects"
}
```

3. **Test locally:**

```bash
npm run build
npm link
vue-feature generate test --dir /tmp/test
```

### Publish Steps

```bash
# 1. Login to npm
npm login

# 2. Build the package
npm run build

# 3. Publish
npm publish

# 4. Test installation
npm install -g your-package-name
```

---

## 🌐 After Publishing - User Installation

Users can then install and use it globally:

```bash
# Install globally
npm install -g vue-feature-scaffold

# Use anywhere
cd my-laravel-project
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages
```

---

## ⚠️ Common Issues

### Issue: "Directory does not exist"

**Solution:** Create the directory first:

```bash
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages
```

### Issue: "Command not found: vue-feature"

**Solution:** Link the package or use npm run:

```bash
# Option 1: Link globally
npm link

# Option 2: Use npm script
npm run generate users -- --dir output
```

### Issue: Generated files have placeholder text

**Solution:** This is intentional! The generated files contain **commented examples**. Uncomment and customize them for your use case.

---

## 📚 Next Steps

1. **Customize templates** in `templates/` directory
2. **Add tests** using Vitest
3. **Implement `--store` flag** for Pinia support
4. **Publish to npm** when ready
5. **Add interactive mode** with prompts

---

## 💬 Support

- GitHub Issues: [Your repo URL]
- Documentation: See USAGE.md, QUICKSTART.md, CUSTOMIZATION.md
- Examples: Check `examples/test/demo/` for working code
