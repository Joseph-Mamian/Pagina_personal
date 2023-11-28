function confirmar(){
    Swal.fire({
        icon: 'success',
        ShowConfirmButton: false,
        text: "tabla guardada",
        background: 'white',
        position:'center' 
    });
}
function eliminar_cambios(){
    Swal.fire({
        icon: 'success',
        ShowConfirmButton: true,
        text: "tabla eliminada",
        background: 'white',
    });
    document.getElementById("eliminar").reset();
}