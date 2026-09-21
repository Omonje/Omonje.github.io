(function () {
  var dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var img = dialog.querySelector('img');
  var cap = dialog.querySelector('.cap');

  document.querySelectorAll('.shot').forEach(function (btn) {
    btn.addEventListener('click', function () {
      img.src = btn.dataset.src;
      img.alt = btn.dataset.alt || '';
      cap.textContent = btn.dataset.alt || '';
      dialog.showModal();
    });
  });

  dialog.querySelector('.close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
})();
