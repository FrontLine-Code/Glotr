import axiosInstance from './axiosInstance';

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Optional because you might not want to include it when fetching user details
}

export const login = async (username: string, password: string): Promise<User> => {
  const response = await axiosInstance.post('/auth/login', { username, password });
  return response.data;
};

export const register = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await axiosInstance.post('/auth/register', user);
  return response.data;
};

export const getUserDetails = async (id: string): Promise<User> => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

export const updateUserDetails = async (id: string, user: Partial<User>): Promise<User> => {
  const response = await axiosInstance.put(`/users/${id}`, user);
  return response.data;
};