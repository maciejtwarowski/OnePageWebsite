function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox when clicking outside of the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});