document.getElementById('nuevo-meme').addEventListener('click', function() {
    var imagen = document.getElementById('imagen');
    var imagenes = [];
    for (var i = 1; i <= 112; i++) {
        imagenes.push('memes/meme (' + i + ').png');
    }
    var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    imagen.src = imagenes[indiceAleatorio];
    imagen.style.display = 'block';
});