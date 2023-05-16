import axios from "axios";
const httpPost = (url, params) => {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(url, JSON.stringify(params), axiosConfig)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default httpPost;
