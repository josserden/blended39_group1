import 'material-icons/iconfont/material-icons.css';
import swal from 'sweetalert';
import './sass/main.scss';

import ApiService from './js/apiService';
import { renderMarkup } from './js/renderMarkup';
import refs from './js/refs';
import card from './template/card.hbs';

const showSpinner = {
  visible() {
    refs.loader.classList.remove('d-none');
  },

  hidden() {
    refs.loader.classList.add('d-none');
  },
};

let options = {
  root: null,
  rootMargin: '10px 0px',
  threshold: 0.25,
};

const intersected = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) fetchImg();
  });
};

let observer = new IntersectionObserver(intersected, options);

function fetchImg() {
  ApiService.fetchImage().then(data => {
    const options = {
      ref: refs.gallery,
      template: card,
      data: data.hits,
    };

    if (data.hits.length === 0) {
      showSpinner.hidden();
      return swal('Ooops!', 'Image not found!', 'error');
    }

    renderMarkup(options);
  });
}

function onSearch(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  ApiService.resetPage();
  showSpinner.visible();

  const userRequest = event.currentTarget.elements.query.value.trim();

  if (!userRequest) {
    refs.loader.classList.add('d-none');
    return swal('Bad request!', 'You input empty!', 'error');
  }

  ApiService.query = userRequest;
  observer.observe(refs.loader);

  refs.form.reset();
}

showSpinner.hidden();
observer.unobserve(refs.loader);

refs.form.addEventListener('submit', onSearch);
