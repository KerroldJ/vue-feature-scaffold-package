import { ref } from 'vue';
import { getDemosApi, createDemoApi, updateDemoApi, deleteDemoApi } from '../services/demoApi';
import type { Demo } from '../types';

/**
 * Composable for managing demo state and operations
 */
export function useDemo() {
  const demos = ref<Demo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  /**
   * Fetch all demos from the API
   */
  const fetchDemos = async () => {
    loading.value = true;
    error.value = null;
    try {
      demos.value = await getDemosApi();
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch demos';
      console.error('Error fetching demos:', e);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Create a new demo
   */
  const createDemo = async (data: Partial<Demo>) => {
    loading.value = true;
    error.value = null;
    try {
      const newDemo = await createDemoApi(data);
      demos.value.push(newDemo);
      return newDemo;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to create demo';
      console.error('Error creating demo:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Update an existing demo
   */
  const updateDemo = async (id: number, data: Partial<Demo>) => {
    loading.value = true;
    error.value = null;
    try {
      const updatedDemo = await updateDemoApi(id, data);
      const index = demos.value.findIndex((u) => u.id === id);
      if (index !== -1) {
        demos.value[index] = updatedDemo;
      }
      return updatedDemo;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to update demo';
      console.error('Error updating demo:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Delete a demo
   */
  const deleteDemo = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await deleteDemoApi(id);
      demos.value = demos.value.filter((u) => u.id !== id);
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to delete demo';
      console.error('Error deleting demo:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    demos,
    loading,
    error,
    fetchDemos,
    createDemo,
    updateDemo,
    deleteDemo,
  };
}
