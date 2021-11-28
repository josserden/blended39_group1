import 'material-icons/iconfont/material-icons.css';
import swal from 'sweetalert';
import './sass/main.scss';

import { apiSearch } from './js/apiService';
import { renderMarkup } from './js/renderMarkup';
import refs from './js/refs';
import card from './template/card.hbs';

const onSearch = event => {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  const userRequest = event.currentTarget.elements.query.value.trim();

  if (!userRequest) return swal('Bad request!', 'You input empty!', 'error');

  apiSearch(userRequest).then(photos => {
    if (photos.length === 0) return swal('Ooops!', 'No image yet!', 'warning');
    console.log(photos.length);
    renderMarkup(refs.gallery, card, photos);
  });

  refs.form.reset();
};

refs.form.addEventListener('submit', onSearch);
