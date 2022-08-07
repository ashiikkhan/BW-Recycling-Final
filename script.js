// form display
const form = document.getElementById('form');
const formDisplay = () => {
  form.classList.add('form-active');
};
// form closing
const closingButton = document.getElementById('closing-btn');
closingButton.addEventListener('click', () => {
  form.classList.remove('form-active');
  form.classList.remove('focus-form');
});

// form input focus :

document.body.addEventListener(
  'focus',
  (event) => {
    const target = event.target;
    switch (target.tagName) {
      case 'INPUT':
      case 'TEXTAREA':
      case 'SELECT':
        form.classList.add('focus-form');
    }
  },
  true
);
