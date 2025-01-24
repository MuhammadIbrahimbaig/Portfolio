document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("web-anim-text");

    text.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
});
