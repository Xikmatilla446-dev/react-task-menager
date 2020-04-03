import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
const token = user ? user.token : '';



export const http = axios.create({
    baseURL: `https://http-app-c6bfd.firebaseio.com/data.json`,
});
