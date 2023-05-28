import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.bscscan.com/api',
  params: {
    module: 'account',
    action: 'txlist',
    address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
    startblock: 0,
    endblock: 99999999,
    page: 1,
    offset: 10,
    sort: 'asc',
    apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
  },
});

export default api;
