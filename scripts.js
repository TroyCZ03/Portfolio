document.addEventListener("DOMContentLoaded", function() {
    var popUpElement = document.getElementById('popUpElement'); // Make sure this ID is assigned to the element you want to animate.

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function runOnScroll() {
        if (popUpElement && isInViewport(popUpElement)) {
            popUpElement.classList.add('visible');
        }
    }

    window.addEventListener('scroll', runOnScroll);
});
