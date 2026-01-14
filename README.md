# Vue Feature Scaffold

🚀 A powerful CLI tool to generate feature-based Vue.js architecture for Laravel projects with TypeScript support.

## ✨ Features

- 🎯 **Feature-based architecture** - Self-contained, modular Vue components
- 📝 **Pure comment templates** - Maximum flexibility with comprehensive examples
- 🔷 **TypeScript first** - Full type safety out of the box
- ⚡ **Laravel + Inertia.js ready** - Built for modern Laravel stacks
- 🎨 **Customizable** - Adapt generated code to your needs
- 🛡️ **Safe generation** - Directory validation prevents accidents

## 📦 Installation

### For End Users (After Publishing to npm)

Once published, users can install globally:

```bash
npm install -g vue-feature-scaffold
```

Then use anywhere:

```bash
cd your-laravel-project
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages
```

### For Local Development/Testing (Before Publishing)

If you're developing this tool or want to use it before publishing:

#### Option 1: npm link (Requires sudo on Linux)

```bash
# In the vue-feature-scaffold directory
npm install
npm run build
sudo npm link

# Now use globally
cd your-project
vue-feature generate users --dir src/features
```

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

```bash
# From your Laravel project
cd your-laravel-project
mkdir -p resources/js/pages

# Run from vue-feature-scaffold location
node /path/to/vue-feature-scaffold/dist/cli.js generate users --dir resources/js/pages
```

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
```

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
# IF INSTALLED GLOBALLY (after npm publish)
# ============================================================================

# Basic feature generation
vue-feature generate users --dir resources/js/pages

# Without table component
vue-feature generate dashboard --dir src/features --no-table

# Without form component
vue-feature generate reports --dir src/features --no-form

# Minimal feature (no table, no form)
vue-feature generate analytics --dir src/features --no-table --no-form

# Laravel typical structure
vue-feature generate products --dir resources/js/pages

# Deeply nested path
vue-feature generate employees --dir HRIS/web-admin/resources/js/pages

# ============================================================================
# IF USING LOCALLY (before publishing)
# ============================================================================

# Using npm run (from vue-feature-scaffold directory)
npm run generate users -- --dir /path/to/project/resources/js/pages
npm run generate products -- --dir output --no-form

# Using node directly
node dist/cli.js generate users --dir resources/js/pages
node dist/cli.js generate orders -- --dir src/features --no-table

# From a different directory
cd your-laravel-project
node /path/to/vue-feature-scaffold/dist/cli.js generate users --dir resources/js/pages
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
- 🔗 Inertia.js integration examples
- 📱 Multiple layout patterns

## 🔗 Laravel Integration

### Complete Setup Guide

#### Step 1: Install/Setup vue-feature-scaffold

**If published to npm:**

```bash
npm install -g vue-feature-scaffold
```

**If using locally:**

```bash
cd /path/to/vue-feature-scaffold
npm install && npm run build
sudo npm link  # Or use npm run generate
```

#### Step 2: Generate Feature in Your Laravel Project

```bash
cd your-laravel-project
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages

# Or if using locally without link:
cd /path/to/vue-feature-scaffold
npm run generate users -- --dir /path/to/your-laravel-project/resources/js/pages
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

```bash
# 1. In your Laravel project root
cd ~/projects/my-laravel-app

# 2. Generate user management feature
vue-feature generate users --dir resources/js/pages

# 3. Generate product catalog feature
vue-feature generate products --dir resources/js/pages

# 4. Generate dashboard (no table/form needed)
vue-feature generate dashboard --dir resources/js/pages --no-table --no-form

# 5. Build your assets
npm run dev
```

### Expected API Structure

The generated code works with RESTful Laravel APIs:

| Method   | Endpoint          | Purpose         |
| -------- | ----------------- | --------------- |
| `GET`    | `/api/users`      | List all users  |
| `GET`    | `/api/users/{id}` | Get single user |
| `POST`   | `/api/users`      | Create user     |
| `PUT`    | `/api/users/{id}` | Update user     |
| `DELETE` | `/api/users/{id}` | Delete user     |

## 📚 Documentation

- **[HOW-TO-USE.md](HOW-TO-USE.md)** - Comprehensive usage guide
- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Customization examples
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Developer guide
- **[examples/](examples/)** - Working example features

## 🛠️ Development

### Setup

````bash
# Install dependencies
npm install

# Build
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

### Command Not Found?

If you get `vue-feature: command not found`, you have three options:

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

```bash
cd /path/to/vue-feature-scaffold
npm install && npm run build
sudo npm link

# Now use in any project
cd ~/projects/project-a
vue-feature generate users --dir resources/js/pages

cd ~/projects/project-b
vue-feature generate products --dir src/features
```

**Approach 2: Direct path usage**

```bash
# Set an alias in your ~/.bashrc or ~/.zshrc
alias vue-feature="node /path/to/vue-feature-scaffold/dist/cli.js"

# Then use anywhere
cd your-project
vue-feature generate users --dir resources/js/pages
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📦 Publishing to npm

When ready to publish this package:

```bash
# 1. Update package.json with unique name if needed
# Check if name is available: npm search vue-feature-scaffold

# 2. Build the package
npm run build

# 3. Test locally first
npm link
vue-feature generate test --dir /tmp/test

# 4. Login to npm (one-time)
npm login

# 5. Publish
npm publish

# 6. Verify installation
npm install -g vue-feature-scaffold
vue-feature generate users --dir test
```

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

### Testing

```bash
# Generate test feature
npm run build
npm run generate test-feature -- --dir test-output

# Verify generated files
ls -la test-output/test-feature/
```

## ⚠️ Important Notes

### Directory Must Exist

The CLI validates that the output directory exists before generating files. This prevents accidental file creation in wrong locations.

```bash
# ❌ This will fail
vue-feature generate users --dir nonexistent/path

# ✅ Do this instead
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages
```

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
