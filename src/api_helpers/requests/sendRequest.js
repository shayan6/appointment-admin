import axios from "axios";
const sendRequest = (httpRequestData) => {
  const { url, method, postData: params } = httpRequestData;
  return axios.get(url, null, {
    params,
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error;
    });
};

export default sendRequest;
