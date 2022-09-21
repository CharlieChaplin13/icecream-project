(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-ingredients-modal-open]'),
    closeModalBtn: document.querySelector('[data-ingredients-modal-close]'),
    modal: document.querySelector('[data-ingredients-modal]'),
  };

  refs.openModalBtn.forEach(el => {
    console.log(el);
    el.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();