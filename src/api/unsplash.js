import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tr5eg6dlsFCClA1oaHWYDUap2F222ehc6zJU4egQ3rs',
  },
});
