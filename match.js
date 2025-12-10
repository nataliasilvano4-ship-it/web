
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('match-modal');
  const modalText = document.getElementById('modal-text');
  const modalCloseBtns = modal.querySelectorAll('.modal-close, #modal-close-2');
  const contactBtn = document.getElementById('modal-contact');

  document.querySelectorAll('.match-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const name = this.dataset.name || 'este felino';
      modalText.textContent = `¡Has hecho match con ${name}! ¿Quieres adoptarlo?`;
      openModal();
    });
  });

  function openModal(){
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      modal.querySelector('.modal-panel').focus();
    }, 50);
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalCloseBtns.forEach(b => b.addEventListener('click', closeModal));

  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  window.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){
      closeModal();
    }
  });

  contactBtn.addEventListener('click', function(){
    window.location.href = 'https://forms.gle/MfnhXgKvEsdETW947';
  });
});