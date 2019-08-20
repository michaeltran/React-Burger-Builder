import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4801d.firebaseio.com/',
    params: {}
});

export default instance;