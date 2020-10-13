const btnCircle = document.querySelector('.btn-circle');
const chatContainer = document.querySelector('.chat-container');

btnCircle.addEventListener('click', () => {
  btnCircle.classList.remove('active');
  btnCircle.classList.add('hidden');
  chatContainer.classList.remove('hidden');
  chatContainer.classList.add('active');

  const form = chatContainer.querySelector('.form-widget');
  const close = chatContainer.querySelector('.btn-close');

  function formClose(thisForm) {
    thisForm.reset();
    chatContainer.classList.remove('active');
    chatContainer.classList.add('hidden');
    btnCircle.classList.remove('hidden');
    btnCircle.classList.add('active');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formClose(form);
  });

  close.addEventListener('click', () => {
    formClose(form);
  });
});
