import axios from 'axios';
import type { Demo } from '../types';

const API_BASE = '/api/demos';

/**
 * Get all demos
 */
export async function getDemosApi(): Promise<Demo[]> {
  const response = await axios.get<Demo[]>(API_BASE);
  return response.data;
}

/**
 * Get a single demo by ID
 */
export async function getDemoApi(id: number): Promise<Demo> {
  const response = await axios.get<Demo>(`${API_BASE}/${id}`);
  return response.data;
}

/**
 * Create a new demo
 */
export async function createDemoApi(data: Partial<Demo>): Promise<Demo> {
  const response = await axios.post<Demo>(API_BASE, data);
  return response.data;
}

/**
 * Update an existing demo
 */
export async function updateDemoApi(id: number, data: Partial<Demo>): Promise<Demo> {
  const response = await axios.put<Demo>(`${API_BASE}/${id}`, data);
  return response.data;
}

/**
 * Delete a demo
 */
export async function deleteDemoApi(id: number): Promise<void> {
  await axios.delete(`${API_BASE}/${id}`);
}
