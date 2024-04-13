document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.popUp');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        for (let el of elements) {
            if (isInViewport(el)) {
                el.classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Initial check on load
});
