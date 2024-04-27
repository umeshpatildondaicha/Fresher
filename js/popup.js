document.addEventListener('DOMContentLoaded', function() {
    const feedbackBtn = document.querySelector('.read-btn');
    const modal = document.querySelector('.modal');
  
    feedbackBtn.addEventListener('click', function() {
      modal.style.display = 'block';
      setTimeout(function() {
        modal.classList.add('show');
      }, 0);
    });
  
    modal.querySelector('.close').addEventListener('click', function() {
      hideModal();
    });
  
    modal.querySelector('.cancel').addEventListener('click', function() {
      hideModal();
    });
  
    document.addEventListener('click', function(e) {
      if (!modal.contains(e.target)) {
        hideModal();
      }
    });
  
    modal.addEventListener('transitionend', function(e) {
      if (!this.classList.contains('show')) {
        if (e.propertyName == 'transform') {
          this.style.display = '';
        }
      }
    });
  
    function hideModal() {
      modal.classList.remove('show');
    }
  });
  