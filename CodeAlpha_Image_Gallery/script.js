let currentImageIndex = 0;
const images = [
    'images/Marshall D_ Teach.jpg', 
    'images/One Piece Cartaz de Procurado Atualizado - Dracule Mihawk.jpg', 
    'images/one piece wanted Shanks.jpg', 
    'images/DOFLAMINGO wanted poster.jpg',
    'images/One piece wanted.jpg', 
    'images/Roronoa Zoro.jpg', 
    'images/Nico Robin.jpg', 
    'images/Wanted notice of vinmoke Sanji.jpg',
    'images/Wanted Nami.jpg',
    'images/Trafalgar Law pirate bounty poster.jpg',
    'images/Brook’s bounty.jpg', 
    'images/20768e6c-4daf-4ed7-90db-495c1f7e3132.jpg', 
    'images/ace.jpg',  
    'images/1792d731-196c-4790-8f69-a164b1a85ab3.jpg',  
    'images/4401aa8a-02b6-435a-8a7d-65a62b3d8636.jpg',  
    'images/4632ed23-e628-47b7-85f9-c923ad6bcae1.jpg'
    
];

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightboxImg').src = images[currentImageIndex];
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('lightboxImg').src = images[currentImageIndex];
}
