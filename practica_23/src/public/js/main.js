// Obtenemos todos los botones de borrar
const deleteButtons = document.querySelectorAll('.btnDelete');
// Obtenemos el botón de buscar
const searchButtons = document.querySelectorAll('.btnBuscar');
// Obtenemos el criterio de búsqueda
const criterio = document.getElementById('criteria');

// Añadimos un listener a cada botón de borrar
deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => { 
        e.preventDefault(); // Prevenimos el comportamiento por defecto del botón
        const personaId = button.getAttribute('data-persona-id'); // Obtenemos el id de la persona a borrar
        confirmarBorrado(personaId); // Llamamos a la función que muestra el mensaje de confirmación
    });
});

// Función para confirmar el borrado de una persona
function confirmarBorrado(personaId) {
    Swal.fire({
      title: '¿Estás seguro que quieres borrar esta persona?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar', 
      dangerMode: true
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/deletePerson/' + personaId; // Redirigimos al usuario a la ruta de borrado
      } else {
        Swal.fire('La persona no se ha borrado');
      }
    });
}

// Si no tenemos criterio de búsqueda mostramos mensaje de error
searchButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (criterio.value == '') {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes introducir un criterio de búsqueda'
            });
        } 
    });
});