import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-testnet.bscscan.com/api', // Базовый URL для BscScan API
  params: {
    apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY', // Ваш API-ключ
  },
});

export default api;
