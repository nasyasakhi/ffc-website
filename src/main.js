//  mobile nav 

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
  mobileNav.classList.toggle(navOpenedClass);
  mobileNav.classList.toggle(navClosedClass);

  closeBtnIcon.classList.toggle(arrowLeftClass);
  closeBtnIcon.classList.toggle(arrowRightClass);

})

// slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// QNA
const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.className = `${iconClass} text-2xl`; // Menggunakan className untuk mengubah kelas CSS dari ikon
    });
});


var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

