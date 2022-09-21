(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('[data-buy-now-modal-open]'),
      closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
      modal: document.querySelector('[data-buy-now-modal]'),
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