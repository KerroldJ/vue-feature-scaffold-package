# Vue Feature Scaffolder - CLI Tool for Laravel Projects

## Project Purpose

This is an **npm CLI package** that generates feature-based Vue.js architecture for Laravel projects. When users run the command, it auto-creates a complete feature structure with Vue 3 + TypeScript.

## Generated Feature Structure

```
src/
  └─ {feature-name}/
     ├─ Index.vue              # Main feature entry component
     ├─ components/            # Feature-specific components
     │   ├─ {Feature}Table.vue
     │   └─ {Feature}Form.vue
     ├─ composables/           # Vue composables for state/logic
     │   └─ use{Feature}.ts
     ├─ services/              # API communication layer
     │   └─ {feature}Api.ts
     └─ types.ts               # TypeScript interfaces/types
```

## Architecture Principles

### Feature Self-Containment

- Each generated feature is **fully self-contained** with all necessary files
- Features should not import from other features (except shared utilities)
- All feature-specific logic, types, and components live within the feature folder

### File Responsibilities

**`Index.vue`** - Main feature view

- Entry point for the feature route
- Flexible placeholder template with Inertia.js and AppLayout integration
- Includes breadcrumbs and PlaceholderPattern components
- Contains commented-out composable integration for easy activation
- Developers customize this file for their specific needs (forms, tables, dashboards, etc.)
- Provides a structured starting point rather than prescriptive implementation

**`components/`** - UI components

- `{Feature}Table.vue` - Data display component
- `{Feature}Form.vue` - Create/edit form component
- Should be "dumb" components receiving props and emitting events

**`composables/use{Feature}.ts`** - Business logic & state

- Manages feature state (reactive data)
- Handles CRUD operations via service calls
- Returns methods and reactive state to components
- Example: `useUsers()` returns `{ users, loading, fetchUsers, createUser, ... }`

**`services/{feature}Api.ts`** - API layer

- Pure API communication functions
- Uses axios or fetch to hit Laravel backend endpoints
- Returns typed responses
- Example: `getUsersApi()`, `createUserApi(data)`

**`types.ts`** - TypeScript definitions

- Interfaces for feature entities
- Request/response types
- Enums and constants

### Naming Conventions

**Files:**

- Components: PascalCase (e.g., `UserTable.vue`, `UserForm.vue`)
- Composables: camelCase with "use" prefix (e.g., `useUsers.ts`)
- Services: camelCase with "Api" suffix (e.g., `userApi.ts`)
- Types: lowercase (e.g., `types.ts`)

**Code:**

- Component names: PascalCase
- Composable functions: `use{Feature}`
- API functions: `{action}{Feature}Api`
- Types/Interfaces: PascalCase (e.g., `User`, `CreateUserRequest`)

## CLI Development

### Project Structure (This Package)

```
/src
  /cli          # CLI entry point and argument parsing
  /generators   # File generation logic
  /templates    # Template files for each generated file
  /utils        # Helper functions
/tests          # Unit tests for generators
```

### Key Development Commands

```bash
# Install dependencies
npm install

# Development mode (watch & rebuild)
npm run dev

# Build for production
npm run build

# Test locally before publishing
npm link
# Then in another project: npx your-cli-name generate users

# Run tests
npm test

# Publish to npm
npm publish
```

### Template System

Templates should:

- Use placeholder syntax like `{{FEATURE_NAME}}`, `{{FEATURE_PASCAL}}`, `{{FEATURE_CAMEL}}`
- Support both singular and plural forms
- Include TypeScript annotations
- Follow Vue 3 Composition API patterns
- Include JSDoc comments for generated functions

### CLI Arguments Expected

```bash
vue-feature generate <feature-name> [options]

Options:
  --dir <path>       Output directory (default: src/) - **must exist before running**
  --no-table         Skip table component generation
  --no-form          Skip form component generation
  --store            Add Pinia store (optional)
```

**Important:** The CLI validates that the output directory exists before generating files. This prevents accidental file creation in wrong locations. Users must create the directory first:

```bash
mkdir -p resources/js/pages
vue-feature generate users --dir resources/js/pages
```

## Testing Strategy

- **Unit tests**: Test generator functions produce correct file structure
- **Template tests**: Verify templates render with correct replacements
- **Integration tests**: Test full CLI execution produces valid Vue code
- **Snapshot tests**: Compare generated files against expected output

## Code Quality

- Use TypeScript for the CLI tool itself
- Lint generated templates to ensure valid Vue/TS code
- Use Commander.js or Inquirer.js for CLI interaction
- Follow semantic versioning for npm releases

## Integration with Laravel

Generated features expect:

- Laravel API endpoints at `/api/{feature-name}`
- RESTful conventions (GET, POST, PUT, DELETE)
- JSON responses with consistent structure
- CSRF token handling (if using Sanctum/session auth)

Example Laravel route:

```php
Route::apiResource('users', UserController::class);
```

---

**Update this file** as CLI features and template patterns are implemented.
