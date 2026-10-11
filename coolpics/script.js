const dialog = document.querySelector('dialog');
const gallery = document.querySelector('.gallery');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close-viewer');
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const galleryImages = Array.from(document.querySelectorAll('img[alt]'));
let activeImageIndex = 0;

function setDialogImage(index) {
    activeImageIndex = (index + galleryImages.length) % galleryImages.length;
    const selectedImage = galleryImages[activeImageIndex];
    dialogImage.src = selectedImage.src.replace('-sm', '-full');
    dialogImage.alt = selectedImage.alt;
}

function toggleMenu(forceOpen) {
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !nav.classList.contains('open');
    nav.classList.toggle('open', shouldOpen);
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
}

function openViewer(index) {
    setDialogImage(index);
    dialog.showModal();
}

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openViewer(index));
    image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openViewer(index);
        }
    });
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

closeButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        dialog.close();
    }
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

menuButton.addEventListener('click', () => toggleMenu());
menuButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        toggleMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (dialog.open) {
            dialog.close();
            return;
        }

        if (nav.classList.contains('open')) {
            toggleMenu(false);
            menuButton.focus();
        }
    }

    if (event.key.toLowerCase() === 'm' && !event.target.closest('input, textarea, select')) {
        toggleMenu();
    }

    if (dialog.open && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        setDialogImage(activeImageIndex + direction);
    }
});