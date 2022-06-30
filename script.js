const formDisplay = () => {
  const form = document.getElementById('form');
  form.classList.add('form-active');
};
const closingButton = document.getElementById('closing-btn');
const form = document.getElementById('form');
closingButton.addEventListener('click', () => {
  form.classList.remove('form-active');
});
