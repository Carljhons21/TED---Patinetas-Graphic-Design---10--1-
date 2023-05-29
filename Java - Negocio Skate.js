var imagenes = ['imagen1.png', 'imagen2.png', 'imagen3.png'];
var indice = 0;

function cambiarImagen() {
    indice = (indice + 1) % imagenes.length; // This is a modulo operation to loop over the images array.
    document.getElementById('imagenCambiante').src = imagenes[indice];
}