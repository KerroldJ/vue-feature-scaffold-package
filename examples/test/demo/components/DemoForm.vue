<script setup lang="ts">
import { ref, watch } from "vue";
import type { Demo } from "../types";

interface Props {
  demo?: Demo | null;
  loading?: boolean;
}

interface Emits {
  (e: "save", demo: Partial<Demo>): void;
  (e: "cancel"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const formData = ref({
  name: "",
  // Add more fields as needed
});

watch(
  () => props.demo,
  (demo) => {
    if (demo) {
      formData.value = { ...demo };
    } else {
      formData.value = { name: "" };
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  emit("save", formData.value);
};
</script>

<template>
  <div class="demo-form">
    <h2>{{ demo ? "Edit" : "Create" }} Demo</h2>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          required
          class="form-control"
        />
      </div>

      <!-- Add more form fields as needed -->

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? "Saving..." : "Save" }}
        </button>
        <button
          type="button"
          @click="emit('cancel')"
          class="btn"
          :disabled="loading"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.demo-form h2 {
  margin: 0 0 1.5rem;
  color: #1f2937;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
}

.form-control {
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  box-sizing: border-box;
}

.form-control:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.btn {
  padding: 0.625rem 1.25rem;
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

.btn-primary:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.btn:not(.btn-primary) {
  background: #f3f4f6;
  color: #374151;
}

.btn:not(.btn-primary):hover {
  background: #e5e7eb;
}
</style>
