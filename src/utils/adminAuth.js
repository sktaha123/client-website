// src/utils/adminAuth.js

export const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN;

export function isAdmin() {
  return Boolean(ADMIN_TOKEN);
}
