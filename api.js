import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.bscscan.com/api?module=account&action=balancemulti&address=0x3f349bBaFEc1551819B8be1EfEA2fC46cA749aA1,0x4bF01a5A576bE1254C5E19fbE5EB195D6cFBeBdD,0x70F657164e5b75689b64B7fd1fA275F334f28e18&tag=latest&apikey=YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY', // Базовый URL для BscScan API
  params: {
    apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY', // Ваш API-ключ
  },
});

export default api;
