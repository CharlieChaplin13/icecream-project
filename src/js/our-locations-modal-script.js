(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-our-location-modal-open]"),
      closeModalBtn: document.querySelector("[data-our-location-modal-close]"),
      modal: document.querySelector("[data-our-location-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-open");
    }
  })();