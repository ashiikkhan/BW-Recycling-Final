const formDisplay = () => {
  const btn = document.getElementById('btn');
  btn.classList.add('d-none');
  const form = document.getElementById('form');
  form.classList.toggle('form-active');
};
const closingButton = document.getElementById('closing-btn');
const form = document.getElementById('form');
const btn = document.getElementById('btn');
closingButton.addEventListener('click', () => {
  form.classList.remove('form-active');
  btn.classList.remove('d-none');
});
