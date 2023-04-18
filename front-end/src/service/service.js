import axios from 'axios';

const mongoURI = process.env.MONGO_URI;
const API_URL = 'mongoURI';

const getAllPrompts = () => {
  return axios.get(`${API_URL}/items`);
};

const getPromptById = (id) => {
  return axios.get(`${API_URL}/items/${id}`);
};

const createPrompt = (data) => {
  return axios.post(`${API_URL}/items`, data);
};

const updatePrompt = (id, data) => {
  return axios.put(`${API_URL}/items/${id}`, data);
};

const deletePrompt = (id) => {
  return axios.delete(`${API_URL}/items/${id}`);
};

export default {
  getAllPrompts,
  getPromptById,
  createPrompt,
  updatePrompt,
  deletePrompt,
};