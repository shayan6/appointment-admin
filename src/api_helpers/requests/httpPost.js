import axios from "axios";
const httpPost = (url, params) => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
  };
  return axios
    .post(url, JSON.stringify(params), axiosConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default httpPost;
