import axios from "axios";

const mongoURI = process.env.REACT_APP_MONGO_URI;

const getAllPrompts = () => {
  return axios.get(`${mongoURI}/tasks`);
};

//    ----------With success and error handlers---------------------
// const getAllPrompts = () => {
//     const config= {
//         method: "GET",
//         url: `${mongoURI}/tasks`,
//         crossdomain: true,
//         headers: {"Content-type": "application/json"}
//     };
//     return axios(config); // .then(onSuccess).catch(onError);
//   };

const getPromptById = (id) => {
  return axios.get(`${mongoURI}/tasks/${id}`);
};

const createPrompt = (data) => {
  return axios.post(`${mongoURI}/tasks`, data);
};

const updatePrompt = (id, data) => {
  return axios.put(`${mongoURI}/tasks/${id}`, data);
};

const deletePrompt = (id) => {
  return axios.delete(`${mongoURI}/tasks/${id}`);
};

export default {
  getAllPrompts,
  getPromptById,
  createPrompt,
  updatePrompt,
  deletePrompt,
};