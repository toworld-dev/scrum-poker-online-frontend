import axios from 'axios';
import envrironment from '../config/environment';

const api = axios.create({
  baseURL: envrironment.httpURL,
});

export default api;
