const gallery = document.getElementById('gallery');

dibujos.forEach(dibujo => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';

    const img = document.createElement('img');
    img.src = dibujo.image;
    img.alt = dibujo.type;

    const overlay = document.createElement('div');
    overlay.className = 'thumbnail-overlay';

    const link = document.createElement('a');
    link.href = dibujo.name;
    link.textContent = 'Ver más';
    link.target = '_blank';

    overlay.appendChild(link);
    thumbnail.appendChild(img);
    thumbnail.appendChild(overlay);
    gallery.appendChild(thumbnail);
});