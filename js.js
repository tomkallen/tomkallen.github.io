var zz = document.getElementsByClassName("x")[0];

window.addEventListener('scroll', function() {
    zz.classList[
        window.scrollY > 200 ? 'add' : 'remove'
    ]('scrolled');
});