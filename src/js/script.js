const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closElem = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__ratings_counter'),
      lines = document.querySelectorAll('.skills__ratings_line span'),
      removeClass = document.querySelectorAll('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

removeClass.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


const wrapper = document.querySelector('.promo__link'),
      wrapperBtn = document.querySelectorAll('.promo__link a');


wrapper.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('button')) {
        wrapperBtn.classList.add('button');
    } else {
        wrapperBtn.classList.remove('button');
    }
});