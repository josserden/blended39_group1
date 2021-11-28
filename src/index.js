import 'material-icons/iconfont/material-icons.css';
import swal from 'sweetalert';
import './sass/main.scss';

import ApiService from './js/apiService';
import { renderMarkup } from './js/renderMarkup';
import refs from './js/refs';
import card from './template/card.hbs';

const onSearch = event => {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  ApiService.resetPage();

  const userRequest = event.currentTarget.elements.query.value.trim();

  if (!userRequest) return swal('Bad request!', 'You input empty!', 'error');

  ApiService.query = userRequest;

  ApiService.fetchImage().then(data => {
    if (!data) return;

    const options = {
      ref: refs.gallery,
      template: card,
      data: data.hits,
    };

    renderMarkup(options);
  });

  refs.form.reset();
};

refs.form.addEventListener('submit', onSearch);
