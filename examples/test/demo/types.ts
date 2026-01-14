/**
 * Demo entity type
 */
export interface Demo {
  id: number;
  name: string;
  description?: string;
  status?: 'active' | 'pending' | 'completed' | 'archived';
  created_at?: string;
  updated_at?: string;
}

/**
 * Request type for creating a demo
 */
export interface CreateDemoRequest {
  name: string;
  description?: string;
  status?: Demo['status'];
}

/**
 * Request type for updating a demo
 */
export interface UpdateDemoRequest {
  name?: string;
  description?: string;
  status?: Demo['status'];
}

/**
 * API response wrapper (optional - adjust based on your Laravel API structure)
 */
export interface DemoResponse {
  data: Demo;
  message?: string;
}

/**
 * Paginated response (optional - for Laravel pagination)
 */
export interface PaginatedDemoResponse {
  data: Demo[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
