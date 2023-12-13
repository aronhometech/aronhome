function togglePopup() {
    var overlay = document.querySelector('.list_phone');
    var close = document.querySelector('.overlay_menu');
  
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    close.style.display = (close.style.display === 'block') ? 'none' : 'block';
  }