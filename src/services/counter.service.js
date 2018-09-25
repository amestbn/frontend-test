import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: { 'Content-Type': 'application/json' }
});

const defaultResoucePath = '/counters';

const CounterService = {
  post: async (data = {}) => {
    return await customAxios.post(defaultResoucePath, data);
  },
  get: async () => {
    return await customAxios.get(defaultResoucePath);
  },
  delete: async(id) => {
    return await customAxios.delete(`${defaultResoucePath}/${id}`);
  },
  increment: async(id) => {
    return await customAxios.post(`${defaultResoucePath}/${id}/inc`);
  },
  decrement: async(id) => {
    return await customAxios.post(`${defaultResoucePath}/${id}/dec`);
  }
};

export default CounterService;
