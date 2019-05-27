import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://game2048-aa4c5.firebaseio.com/'
});

export default instance;