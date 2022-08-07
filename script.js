// form display
const form = document.getElementById('form');
const formDisplay = () => {
  form.classList.add('form-active');
};
// form closing
const closingButton = document.getElementById('closing-btn');
closingButton.addEventListener('click', () => {
  form.classList.remove('form-active');
});
