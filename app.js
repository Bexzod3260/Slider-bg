const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', function() {
        allRemote();
        slide.classList.add('active')
    })
});

function allRemote() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });
}