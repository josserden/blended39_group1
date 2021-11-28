import axios from 'axios';

const API_KEY = '16085264-71307d3f0a6fd2ec26a379ecb';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default {
  searchQuery: '',
  page: 1,
  perPage: 12,

  async fetchImage() {
    try {
      let response = await axios.get(
        `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`,
      );
      let data = await response.data;
      this.incrementPage();

      return data;
    } catch (error) {
      console.error(error);
    }
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
