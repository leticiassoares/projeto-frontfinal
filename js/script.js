document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    if (mobileNavToggle && mobileNavMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('active');
        });

        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('active');
            });
        });
    }


    const carousel = document.getElementById('carrossel');
    const arrowLeft = document.querySelector('.seta.esquerda');
    const arrowRight = document.querySelector('.seta.direita');

    if (carousel && arrowLeft && arrowRight) {
        function getItemWidth() {
            const firstItem = carousel.querySelector('.item');
            if (firstItem) {
                const itemWidth = firstItem.offsetWidth;
                const itemComputedStyle = window.getComputedStyle(firstItem);
                const marginLeft = parseFloat(itemComputedStyle.marginLeft);
                const marginRight = parseFloat(itemComputedStyle.marginRight);
                return itemWidth + marginLeft + marginRight;
            }
            return 0;
        }

        arrowRight.addEventListener('click', () => {
            const scrollAmount = getItemWidth();
            if (scrollAmount > 0) { 
                carousel.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });

        arrowLeft.addEventListener('click', () => {
            const scrollAmount = getItemWidth();
            if (scrollAmount > 0) { 
                carousel.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }
});