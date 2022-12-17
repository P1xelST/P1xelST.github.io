// slider  add dots
function slider() {

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');

    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slideIndex.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          dotts = [];
    dots.classList.add('carousel-indicators');
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = '1';
        }
        dots.append(dot);
        dotts.push(dot);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
        dotts.forEach(dot => {
            dot.style.opacity = '.5';
        })
        dotts[slideIndex - 1].style.opacity = 1;
    });

    next.addEventListener('click', () => {
        plusSlides(1);
        dotts.forEach(dot => {
            dot.style.opacity = '.5';
        })
        dotts[slideIndex - 1].style.opacity = 1;
    });

    dotts.forEach(dot => {
        dot.addEventListener('clcik', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dotts.forEach(dot => {
                dot.style.opacity = '.5';
            })
            dotts[slideIndex - 1].style.opacity = 1;

        });
    });
}
module.exports = slider;