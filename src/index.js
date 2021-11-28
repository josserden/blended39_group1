import 'material-icons/iconfont/material-icons.css';
import swal from 'sweetalert';
import './sass/main.scss';

import ApiService from './js/apiService';
import { renderMarkup } from './js/renderMarkup';
import refs from './js/refs';
import card from './template/card.hbs';

ApiService.fetchImage().then(data => console.log(data));

const onSearch = event => {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  const userRequest = event.currentTarget.elements.query.value.trim();

  if (!userRequest) return swal('Bad request!', 'You input empty!', 'error');

  refs.form.reset();
};

refs.form.addEventListener('submit', onSearch);
