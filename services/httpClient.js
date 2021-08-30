import axios from 'axios';

const getHeader = (token) => (token ? { 'Authorization': `Bearer ${token}` } : null);

const httpGet = (url, params) => {
  const axiosGet = params ? axios.get(url, params) : axios.get(url);
  return axiosGet
    .then((response) => {
      return response.data;
    })
    .catch(() => {});
};

const httpPost = function (url, data, callback) {
  axios
    .post(url, data)
    .then((response) => {
      //console.log("GOt Response",response);
      return callback(null, response.data);
    })
    .catch((err) => {
    //return err;
    console.log('httperror',err)
    console.log('httperror message',err.response.data.message);   
    console.error('httperrorResponse',err.response);
    console.error('httperror data',err.response.data);   
    console.error('httperror',err.response.status); 
    return(callback (err, null));
    });
};


// const httpPost = (url, data, callback) => {
//   return axios
//     .post(url, data)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//     //return err;
//     console.log('httperror',err)
//     console.error('httperror',err.response.data);   
//     console.error('httperror',err.response.status); 
//     throw new Error('Erro returned from http post ')
//     });
// };

const httpPut = (url, data) => {
  return axios
    .put(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {console.log(err)});
};

const httpPostWithToken = (url, data, token,) => {
  const headers = getHeader(token);
  return axios
    .post(url, data, { headers: headers })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log("error From Post:", err);
    });
};

const httpPutWithToken = (url, data, token) => {
  const headers = getHeader(token);
  return axios
    .put(url, data, { headers: headers })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log("error From Put:", err);
    });
};

const httpGetWithToken = (url, params, token) => {
  const headers = getHeader(token);
  const axiosGet = params
    ? axios.get(url, params, { headers: headers })
    : axios.get(url, { headers: headers });

    //axiosGet.header = header;
  return axiosGet
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};

const httpClient = { httpGet, httpPost,httpPut,httpPostWithToken,httpGetWithToken,httpPutWithToken};

export default httpClient;
