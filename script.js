
//função para modo escuro
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
if(localStorage.getItem('darkMode')=== 'enabled'){
    trilho.classList.add('dark');
    body.classList.add('dark');
}

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        localStorage.setItem('darkMode', 'enabled');
    }else{
        localStorage.setItem('darkMode', 'disable');
    }
})

//função para carrossel de imagens
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const images = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = images[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

