export const renderMarkup = (ref, template, data) => {
  ref.insertAdjacentHTML('beforeend', template(data));
};
