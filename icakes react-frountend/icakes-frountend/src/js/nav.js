window.addEventListener('scroll', function () {
    var collapseDiv = document.getElementById('collapseMenu');
    var bounding = collapseDiv.getBoundingClientRect();
    var scrollPosition = window.scrollY;

    if (bounding.top <= 0) {
        collapseDiv.classList.add('sticky');
    } else {
        collapseDiv.classList.remove('sticky');
    }
});