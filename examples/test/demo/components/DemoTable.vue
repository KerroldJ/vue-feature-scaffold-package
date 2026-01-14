<script setup lang="ts">
import type { Demo } from "../types";

interface Props {
  demos: Demo[];
  loading?: boolean;
}

interface Emits {
  (e: "edit", demo: Demo): void;
  (e: "delete", id: number): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const formatDate = (date?: string) => {
  if (!date) return "N/A";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>

<template>
  <div class="demo-table">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading demos...</p>
    </div>

    <div v-else-if="demos.length === 0" class="empty">
      <svg
        class="empty-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
      <h3>No demos found</h3>
      <p>Get started by creating your first demo.</p>
    </div>

    <table v-else class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="demo in demos" :key="demo.id">
          <td class="id-cell">{{ demo.id }}</td>
          <td class="name-cell">{{ demo.name }}</td>
          <td class="date-cell">{{ formatDate(demo.created_at) }}</td>
          <td class="actions">
            <button @click="emit('edit', demo)" class="btn btn-sm btn-edit">
              ✏️ Edit
            </button>
            <button
              @click="emit('delete', demo.id)"
              class="btn btn-sm btn-danger"
            >
              🗑️ Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.demo-table {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead {
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
}

.table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table td {
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.table tbody tr:hover {
  background: #f9fafb;
}

.id-cell {
  color: #6b7280;
  font-weight: 500;
  width: 80px;
}

.name-cell {
  font-weight: 500;
  color: #1f2937;
}

.date-cell {
  color: #6b7280;
  font-size: 0.875rem;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-sm {
  padding: 0.25rem 0.625rem;
  font-size: 0.8125rem;
}

.btn-edit {
  background: #eff6ff;
  color: #1d4ed8;
}

.btn-edit:hover {
  background: #dbeafe;
}

.btn-danger {
  background: #fef2f2;
  color: #dc2626;
}

.btn-danger:hover {
  background: #fee2e2;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  border: 4px solid #f3f4f6;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.empty {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.empty-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  color: #d1d5db;
}

.empty h3 {
  margin: 0 0 0.5rem;
  color: #374151;
  font-size: 1.125rem;
}

.empty p {
  margin: 0;
  color: #9ca3af;
  font-size: 0.875rem;
}
</style>
