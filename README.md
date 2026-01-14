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

```bash
# Navigate to your project
cd your-project

# Install as dev dependency
npm install --save-dev vue-feature-scaffold

# Generate features using npx
npx vue-feature-scaffold generate users --dir resources/js/pages
```

**Or add to your project's `package.json` for easier usage:**

```json
{
  "scripts": {
    "generate": "vue-feature-scaffold generate"
  }
}
```

**Then use the npm script:**

```bash
# Generate features in your project
npm run generate users -- --dir resources/js/pages
npm run generate products -- --dir src/features
```

## 📁 Generated Structure

### Default Structure (Composable)

When you run `npx vue-feature-scaffold generate users --dir resources/js/pages`, you get:

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

### With Pinia Store (Global State)

When you add the `--store` flag: `npx vue-feature-scaffold generate users --dir resources/js/pages --store`

```
resources/js/pages/
└── users/
    ├── Index.vue                    # Main feature entry component
    ├── components/
    │   ├── UsersTable.vue          # Data table component
    │   └── UsersForm.vue           # Create/edit form
    ├── stores/                      # 🆕 Pinia store instead of composable
    │   └── useUsersStore.ts        # Global state management with Pinia
    ├── services/
    │   └── usersApi.ts             # API communication layer
    └── types.ts                     # TypeScript interfaces
```

### File Responsibilities

**`Index.vue`** - Main feature entry point

- Flexible placeholder template with Inertia.js integration
- Includes breadcrumbs and layout components
- Contains commented examples for easy customization
- Adapt for lists, forms, dashboards, or any view type

**`components/UsersTable.vue`** - Data display component

- Table component with sorting/filtering examples
- Receives data via props, emits events
- Pure presentation logic

**`components/UsersForm.vue`** - Create/edit form

- Form component with validation patterns
- Handles create and update operations
- Loading states and error handling

**`composables/useUsers.ts`** - Business logic & state (Default)

- Manages reactive state (users, loading, errors)
- CRUD operations using the API service
- Returns methods and state to components
- **Component-local state** - Each component gets its own instance

**`stores/useUsersStore.ts`** - Pinia Store (With `--store` flag)

- Manages **global shared state** across all components
- Same CRUD operations as composables
- State persists across component navigation
- Perfect for authentication, shopping cart, notifications
- Requires: `npm install pinia`

**`services/usersApi.ts`** - API communication layer

- RESTful API functions (GET, POST, PUT, DELETE)
- Axios integration (easily swap with fetch)
- Typed request/response handling

**`types.ts`** - TypeScript definitions

- Entity interfaces (User, CreateUserRequest, etc.)
- Request/response types
- Type-safe development
### Options

| Option         | Description                                          | Default |
| -------------- | ---------------------------------------------------- | ------- |
| `--dir <path>` | Output directory (**must exist**)                    | `src/`  |
| `--no-table`   | Skip table component generation                      | `false` |
| `--no-form`    | Skip form component generation                       | `false` |
| `--store`      | Generate Pinia store instead of composable (v0.2.0+) | `false` |
```

### Options

| Option         | Description                       | Default |
| -------------- | --------------------------------- | ------- |
| `--dir <path>` | Output directory (**must exist**) | `src/`  |
| `--no-table`   | Skip table component generation   | `false` |
| `--no-form`    | Skip form component generation    | `false` |
### Examples

```bash
# Basic feature generation (with composable)
npx vue-feature-scaffold generate users --dir resources/js/pages
npx vue-feature-scaffold generate job_publications --dir resources/js/pages

# Generate with Pinia store (global state)
npx vue-feature-scaffold generate auth --dir resources/js/pages --store
npx vue-feature-scaffold generate cart --dir resources/js/pages --store

# Skip table component
npx vue-feature-scaffold generate dashboard --dir src/features --no-table

# Skip form component
npx vue-feature-scaffold generate reports --dir src/features --no-form

# Minimal feature (no table, no form)
npx vue-feature-scaffold generate analytics --dir src/features --no-table --no-form

# Pinia store without table/form
npx vue-feature-scaffold generate notifications --dir src/features --store --no-table --no-form
```

### Using npm scripts

```bash
# After adding "generate": "vue-feature-scaffold generate" to package.json

npm run generate users -- --dir resources/js/pages
npm run generate auth -- --dir resources/js/pages --store
npm run generate products -- --dir src/features --no-table
```

## 🗃️ Composable vs Pinia Store

### When to use Composables (Default)

**Use composables when:**
- ✅ State is **component-specific** (not shared)
- ✅ Each component needs its own independent data
- ✅ Simple CRUD operations without global state needs
- ✅ You want lightweight, no extra dependencies

**Example:** Product listings, user profiles, form handlers

**What's new in recent versions:**

- `v0.2.0` - **NEW: Pinia store support with `--store` flag** 🎉
- `v0.1.2` - Prevents duplicate feature generation (checks if folder exists)
- `v0.1.1` - Preserves feature name format in folder structure
- `v0.1.0` - Initial release with pure comment templates

```typescript
// In any component
const { products, loading, fetchProducts } = useProducts()
// Each component calling useProducts() gets its own state
```

### When to use Pinia Store (`--store`)

**Use Pinia stores when:**
- ✅ State needs to be **shared globally** across components
- ✅ State should persist during navigation
- ✅ Multiple components need to access the same data
- ✅ You need centralized state management (like Vuex)

**Example:** Authentication, shopping cart, notifications, user preferences

```bash
npx vue-feature-scaffold generate auth --dir resources/js/pages --store
```

**Generated:** `stores/useAuthStore.ts`

```typescript
// In any component
const authStore = useAuthStore()
// All components share the same authStore state
```

### Comparison

| Feature              | Composable (Default) | Pinia Store (`--store`) |
| -------------------- | -------------------- | ----------------------- |
| State scope          | Component-local      | Global (shared)         |
| Multiple instances   | Yes                  | No (singleton)          |
| Navigation persists  | No                   | Yes                     |
| DevTools integration | Limited              | Full support            |
| Extra dependencies   | None                 | `pinia`                 |
| Use case             | Feature-specific     | App-wide state          |

### Setup Requirements for Pinia

If you use the `--store` flag, install Pinia:

```bash
npm install pinia
```

**Setup in Laravel + Inertia.js (`resources/js/app.ts`):**

```typescript
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'

createInertiaApp({
  resolve: (name) => require(`./pages/${name}.vue`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createPinia()) // 👈 Add this line
      .mount(el)
  }
})
```

**Usage in components:**

```vue
<script setup lang="ts">
import { useAuthStore } from './stores/useAuthStore'

const authStore = useAuthStore()

// Access state
console.log(authStore.user)

// Call actions
authStore.login({ email: 'user@example.com', password: 'secret' })
</script>
``` run generate products -- --dir src/features --no-table
```

## 🔄 Updating the Package

Keep your CLI up to date with the latest features and fixes:

```bash
# Check current version
npm list vue-feature-scaffold

# Update to latest version
npm update vue-feature-scaffold

# Or install specific version
npm install vue-feature-scaffold@latest

# Force reinstall
npm uninstall vue-feature-scaffold
npm install vue-feature-scaffold
```

**What's new in recent versions:**

- `v0.1.2` - Prevents duplicate feature generation (checks if folder exists)
- `v0.1.1` - Preserves feature name format in folder structure
- `v0.1.0` - Initial release with pure comment templates`

## ⚠️ Important Notes

### Directory Must Exist

The CLI validates that the output directory exists before generating files. This prevents accidental file creation in wrong locations.

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

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with ❤️ for developers who embrace:

- **Feature-based architecture** - Domain-driven, self-contained modules
- **Vue.js ecosystem** - Modern, reactive, and component-driven
- **TypeScript** - Type-safe development for better DX
- **Laravel + Inertia.js** - The perfect full-stack JavaScript experience

### Inspiration

This tool was created to solve real-world challenges:

- Maintaining consistency across large Vue.js codebases
- Reducing boilerplate and setup time for new features
- Promoting best practices in component architecture
- Making TypeScript integration seamless and straightforward

### Why Feature-Based Architecture?

Traditional folder-by-type structure:

```
src/
  ├── components/      # All components mixed together
  ├── composables/     # All composables mixed together
  └── services/        # All services mixed together
```

**Problems:**

- Hard to find related files
- Difficult to remove features
- Unclear ownership and boundaries

Feature-based structure (what this CLI generates):

```
src/
  ├── users/           # Everything users-related
  │   ├── components/
  │   ├── composables/
  │   └── services/
  └── products/        # Everything products-related
      ├── components/
      ├── composables/
      └── services/
```

**Benefits:**

- ✅ Clear feature boundaries
- ✅ Easy to locate and modify code
- ✅ Simple to delete entire features
- ✅ Better team collaboration (feature ownership)
- ✅ Scalable for large applications

---

**Made with ❤️ for the Vue.js community**

_Empowering developers to build maintainable, scalable Vue.js applications._

## License

MIT
