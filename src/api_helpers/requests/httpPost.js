import axios from "axios";
const httpPost = (url, params) => {
  return axios
    .post(url, null, {
      params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default httpPost;
