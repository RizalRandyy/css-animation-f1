document.addEventListener("DOMContentLoaded", function() {
    const cars = document.querySelectorAll('.car');
    
    const updateAnimationWidth = () => {
        document.querySelectorAll('.timing-function').forEach(container => {
            const car = container.querySelector('.car');
            const containerWidth = container.clientWidth;
            car.style.setProperty('--animation-width', `${containerWidth}px`);
        });
    };

    // Update the animation width on load and resize
    updateAnimationWidth();
    window.addEventListener('resize', updateAnimationWidth);

    cars.forEach(car => {
        car.addEventListener('animationend', () => {
            if (car.classList.contains('moving-forward')) {
                car.classList.remove('moving-forward');
                car.style.animation = 'move-back 2s linear forwards';
            } else {
                car.classList.add('moving-forward');
                car.style.animation = '';
                // Force reflow
                void car.offsetWidth;
                const timingClass = car.closest('.timing-function').classList[1];
                car.style.animation = `move 2s ${timingClass} forwards`;
            }
        });
        car.classList.add('moving-forward');
    });
});