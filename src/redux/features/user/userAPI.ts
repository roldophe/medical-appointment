// src/features/user/userAPI.ts
import { BASE_URL } from "../../api";// Import BASE_URL from the config file

// Example API call function using the BASE_URL
export const fetchUserData = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return await response.json();
};
