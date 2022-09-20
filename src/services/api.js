import axios from 'axios';

const request = axios.create({
  baseURL: '/api'
});

export const books = {
  list: () => request.get('/books').then((response) => response.data.items),
  create: (data) => request.post('/books', data).then((response) => response.data),
  delete: (id) => request.delete(`/books/${id}`).then((response) => response.data)
};

export const genres = {
  list: () => request.get('/genres').then((response) => response.data.items)
};

export const authors = {
  list: () => request.get('/authors').then((response) => response.data.items)
};
