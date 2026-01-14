<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDemo } from "./composables/useDemo";
import DemoTable from "./components/DemoTable.vue";
import DemoForm from "./components/DemoForm.vue";
import type { Demo } from "./types";

const {
  demos,
  loading,
  error,
  fetchDemos,
  createDemo,
  updateDemo,
  deleteDemo,
} = useDemo();

const showForm = ref(false);
const editingDemo = ref<Demo | null>(null);

onMounted(() => {
  fetchDemos();
});

const handleCreate = () => {
  editingDemo.value = null;
  showForm.value = true;
};

const handleEdit = (demo: Demo) => {
  editingDemo.value = demo;
  showForm.value = true;
};

const handleSave = async (demo: Partial<Demo>) => {
  if (editingDemo.value) {
    await updateDemo(editingDemo.value.id, demo);
  } else {
    await createDemo(demo);
  }
  showForm.value = false;
  await fetchDemos();
};

const handleDelete = async (id: number) => {
  if (confirm("Are you sure you want to delete this item?")) {
    await deleteDemo(id);
    await fetchDemos();
  }
};

const handleCancel = () => {
  showForm.value = false;
  editingDemo.value = null;
};
</script>

<template>
  <div class="demo-page">
    <div class="page-header">
      <h1>Demo Management</h1>
      <button @click="handleCreate" class="btn btn-primary">
        + Create New Demo
      </button>
    </div>

    <div v-if="error" class="alert alert-error">
      <strong>Error:</strong> {{ error }}
    </div>

    <DemoForm
      v-if="showForm"
      :demo="editingDemo"
      :loading="loading"
      @save="handleSave"
      @cancel="handleCancel"
    />

    <DemoTable
      v-else
      :demos="demos"
      :loading="loading"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>

<style scoped>
.demo-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  margin: 0;
  font-size: 2rem;
  color: #1a202c;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.alert {
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
}

.alert-error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
}
</style>
