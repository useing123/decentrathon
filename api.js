import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.bscscan.com/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY', // Базовый URL для BscScan API
  params: {
    apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY', // Ваш API-ключ
  },
});

export default api;
