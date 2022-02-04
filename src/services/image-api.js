import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '16085264-71307d3f0a6fd2ec26a379ecb';

export const ImageApi = ({ searchQuery, currentPage, perPage = 12 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${apiKey}&page=${currentPage}`,
        )
        .then(res => res.data.hits);
};
