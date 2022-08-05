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

document.body.addEventListener(
  'focus',
  (event) => {
    const target = event.target;
    switch (target.tagName) {
      case 'INPUT':
      case 'TEXTAREA':
      case 'SELECT':
        document.body.classList.add('keyboard');
    }
  },
  true
);
document.body.addEventListener(
  'blur',
  () => {
    document.body.classList.remove('keyboard');
  },
  true
);
