import api from './api';

export default class Repository {
  // **************************************** //
  //                  FRAMES                  //
  // **************************************** //

  getFrames = async () => api.get(`/frames`);

  createFrame = async data => api.post(`/frame`, data);

  editFrame = async data => api.put(`/frame`, data);

  deleteFrame = async id => api.delete(`/frame/${id}`);

  // **************************************** //
  //                   TODO                   //
  // **************************************** //

  getTodoById = async id => api.get(`/todo/${id}`);

  createTodo = async data => api.post(`/todo`, data);

  editTodo = async data => api.put(`/todo`, data);

  deleteTodo = async id => api.delete(`/todo/${id}`);
}
