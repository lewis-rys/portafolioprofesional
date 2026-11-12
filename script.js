// Abrir modal
  document.querySelectorAll('[data-abrir]').forEach(boton => {
    boton.addEventListener('click', () => {
      document.getElementById(boton.dataset.abrir).showModal();
    });
  });

  // Cerrar con la X
  document.querySelectorAll('.modal-cerrar').forEach(boton => {
    boton.addEventListener('click', () => boton.closest('dialog').close());
  });

  // Cerrar al hacer clic fuera de la ventana
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.close();
    });
  });
