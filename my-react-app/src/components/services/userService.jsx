import axios from "axios";

const API = "https://booksbackend-3rhc.onrender.com/users";

export const getUsers = () => {
  return axios.get(API);
};

export const createUser = (user) => {
  return axios.post(API, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${API}/${id}`);
};

export const updateUser = (id, user) => {
  return axios.put(`${API}/${id}`, user);
};
