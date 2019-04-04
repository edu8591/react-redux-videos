import Axios from 'axios';

const KEY = 'AIzaSyC6TKW47l4qIciVFMwlec4h2c5sN4P2yVA'

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});