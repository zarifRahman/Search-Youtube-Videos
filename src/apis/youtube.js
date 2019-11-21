import axios from 'axios';
const KEY = 'AIzaSyBnsukc8FeMWYyALQbzdNupRAaPR_ehq8Q';
//AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})