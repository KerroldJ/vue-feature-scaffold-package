# Customizing Generated Features

## The Index.vue Template

When you generate a feature, the `Index.vue` file is a **flexible starting point** with Inertia.js integration:

```vue
<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import PlaceholderPattern from "@/components/PlaceholderPattern.vue";
// Composable is commented out - activate when needed
</script>

<template>
  <Head title="Feature Name" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <!-- Placeholder sections ready for customization -->
  </AppLayout>
</template>
```

## Customization Examples

### Example 1: Data Table View

**Goal:** Display a list of users with CRUD operations

```vue
<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { useUsers } from "./composables/useUsers";
import UsersTable from "./components/UsersTable.vue";
import UsersForm from "./components/UsersForm.vue";

const breadcrumbs = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Users", href: "/users" },
];

// Activate the composable
const {
  users,
  loading,
  error,
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} = useUsers();

const showForm = ref(false);

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <Head title="Users" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-4">
      <button @click="showForm = true">Create User</button>
      <UsersForm
        v-if="showForm"
        @save="createUser"
        @cancel="showForm = false"
      />
      <UsersTable
        :users="users"
        :loading="loading"
        @edit="updateUser"
        @delete="deleteUser"
      />
    </div>
  </AppLayout>
</template>
```

---

### Example 2: Dashboard with Stats

**Goal:** Show analytics and summary cards

```vue
<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { useEmployees } from "./composables/useEmployees";

const breadcrumbs = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Employees", href: "/employees" },
];

const { employees, loading, fetchEmployees } = useEmployees();

const stats = computed(() => ({
  total: employees.value.length,
  active: employees.value.filter((e) => e.status === "active").length,
  inactive: employees.value.filter((e) => e.status === "inactive").length,
}));

onMounted(() => {
  fetchEmployees();
});
</script>

<template>
  <Head title="Employees Dashboard" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex flex-col gap-4 p-4">
      <!-- Stats Cards -->
      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border bg-card p-6">
          <h3 class="text-sm font-medium text-muted-foreground">
            Total Employees
          </h3>
          <p class="text-3xl font-bold">{{ stats.total }}</p>
        </div>
        <div class="rounded-xl border bg-card p-6">
          <h3 class="text-sm font-medium text-muted-foreground">Active</h3>
          <p class="text-3xl font-bold text-green-600">{{ stats.active }}</p>
        </div>
        <div class="rounded-xl border bg-card p-6">
          <h3 class="text-sm font-medium text-muted-foreground">Inactive</h3>
          <p class="text-3xl font-bold text-gray-400">{{ stats.inactive }}</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="rounded-xl border bg-card p-6">
        <h2 class="mb-4 text-xl font-semibold">Recent Activity</h2>
        <EmployeesTable
          :employees="employees.slice(0, 10)"
          :loading="loading"
        />
      </div>
    </div>
  </AppLayout>
</template>
```

---

### Example 3: Form-Only Page

**Goal:** Single purpose create/edit form

```vue
<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import { useProducts } from "./composables/useProducts";
import ProductsForm from "./components/ProductsForm.vue";

const breadcrumbs = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Products", href: "/products" },
  { title: "Create", href: "/products/create" },
];

const { createProduct } = useProducts();
const router = useRouter();

const handleSave = async (product) => {
  await createProduct(product);
  router.push("/products");
};
</script>

<template>
  <Head title="Create Product" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="max-w-2xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6">Create New Product</h1>
      <ProductsForm @save="handleSave" @cancel="router.push('/products')" />
    </div>
  </AppLayout>
</template>
```

---

### Example 4: Custom Layout (No Components)

**Goal:** Build a completely custom view

```vue
<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import { useOrders } from "./composables/useOrders";

const breadcrumbs = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Orders", href: "/orders" },
];

const { orders, loading, fetchOrders } = useOrders();

onMounted(() => {
  fetchOrders();
});
</script>

<template>
  <Head title="Orders" />
  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Order Management</h1>

      <div v-if="loading">Loading...</div>

      <div v-else class="grid gap-4">
        <div
          v-for="order in orders"
          :key="order.id"
          class="border rounded-lg p-4"
        >
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-semibold">Order #{{ order.id }}</h3>
              <p class="text-sm text-gray-500">{{ order.customer_name }}</p>
            </div>
            <span
              class="px-3 py-1 rounded-full text-sm"
              :class="{
                'bg-green-100 text-green-800': order.status === 'completed',
                'bg-yellow-100 text-yellow-800': order.status === 'pending',
                'bg-red-100 text-red-800': order.status === 'cancelled',
              }"
            >
              {{ order.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
```

---

## Tips for Customization

### 1. **Activate the Composable When Needed**

The composable is commented out by default. Uncomment it when you need data fetching:

```vue
// Before (generated) // import { useUsers } from './composables/useUsers'; //
const { users, loading, fetchUsers } = useUsers(); // After (activated) import {
useUsers } from './composables/useUsers'; const { users, loading, fetchUsers } =
useUsers();
```

### 2. **Use Generated Components Selectively**

You don't have to use all generated components:

```vue
// Use only the table import UsersTable from './components/UsersTable.vue'; //
Or only the form import UsersForm from './components/UsersForm.vue'; // Or
neither - build your own
```

### 3. **Mix and Match**

Combine generated components with custom UI:

```vue
<template>
  <AppLayout>
    <!-- Custom header -->
    <div class="custom-header">...</div>

    <!-- Generated table -->
    <UsersTable :users="users" />

    <!-- Custom footer -->
    <div class="custom-footer">...</div>
  </AppLayout>
</template>
```

### 4. **Override Component Styles**

Generated components have basic styles. Override them as needed:

```vue
<style scoped>
/* Override table styles */
:deep(.users-table) {
  /* Your custom styles */
}
</style>
```

---

## When to Use Each Component

| Component                       | Use Case                                              |
| ------------------------------- | ----------------------------------------------------- |
| **Index.vue**                   | Main page entry point - customize as needed           |
| **{Feature}Table.vue**          | Displaying lists of data                              |
| **{Feature}Form.vue**           | Creating or editing single records                    |
| **composables/use{Feature}.ts** | Managing state and API calls                          |
| **services/{feature}Api.ts**    | Raw API communication (rarely needs changes)          |
| **types.ts**                    | TypeScript definitions (update as your model evolves) |

---

**Remember:** The generated code is a **starting point**, not a final product. Modify it to fit your specific requirements!
