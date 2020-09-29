import axios from 'axios';
const KEY='AIzaSyDp7Y3JIQM7lXaz0eI00xrI5w3cA2VQ-eA';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});