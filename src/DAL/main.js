import axios from 'axios';

const url = 'http://localhost:3004/db.json';

export const mainAPI = {
  getTables: axios.get(url),
};
