import * as flsFunction from "./modules/functions.js"

flsFunction.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';



new Swiper('.intro', {
  modules: [Navigation, Pagination],
    // Optional parameters
    loop:true,
    autoplay: {
      delay:300,
      disableOnInteraction:false
    },
    speed:1200,



    spaceBetween: 50,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper('.clients__right', {
    modules: [Navigation, Pagination],
      // Optional parameters
      loop:true,
      autoplay: {
        delay:3000,
        disableOnInteraction:false
      },
      speed:1200,


      slidesPerView: 1,
      spaceBetween: 50,


      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    });

    //перевірка наявності кнопки на сторінці
  //   const setEventLisener = (element, type,  handler) => {
  //     if(!element) {
  //         return;
  //     }
  //     element.addEventListener(type, handler);
  //     return () =>{
  //         element.removeEventListener(type, handler);
  //     }
  // };

//input submit

const submitBtn = document.getElementById('formBtn');
const submitInput = document.querySelectorAll('.form__input');
const submitModalInput = document.querySelectorAll('.modal__input');


submitInput.forEach((item, index)=> {
  item.addEventListener('change', event => {
    const value = event.currentTarget.value;

    if(value === "") {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }

    console.log(index)
  })
});

submitModalInput.forEach((item)=> {
  item.addEventListener('change', event => {
    const value = event.currentTarget.value;
    if(value === "") {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  })
});



//vars
const body = document.querySelector('body');
let nav = document.querySelector('.nav');


  //burger menu

  let burger = document.querySelectorAll('.burger');
  const page = document.querySelector('.page');



  burger.forEach((item)=> {
    item.addEventListener('click', event => {
      event.stopPropagation();
      let $this = event.currentTarget;
      let activeBurger = $this;
      let pageCurrent = $this.closest('.page');



      $this.classList.toggle('active');
      body.classList.toggle('no-scroll');
      nav.classList.toggle('active');
      pageCurrent.classList.toggle('page--active');

    })
  });

//close nav if click on page mack

    body.addEventListener('click', event => {
      let $this = event.currentTarget;
      let burger = document.querySelector('.burger');

      nav.addEventListener('click', event => {
        event.stopPropagation();
      });


        $this.classList.remove('no-scroll');
        page.classList.remove('page--active');
        burger.classList.remove('active');
        nav.classList.remove('active');
    })



// smooth scroll

let scroollLink = document.querySelectorAll('[data-scroll]');
let header = document.querySelector('.header')
let headerHeight = header.offsetHeight;

console.log(headerHeight);

scroollLink.forEach((item) => {
  item.addEventListener('click', event => {
    event.preventDefault();

    let burger = document.querySelector('.burger');
    let $this = event.currentTarget;
    let linkAtt = $this.getAttribute('data-scroll');
    let linkBlock = document.getElementById(linkAtt);
    let linkBlockOffset = linkBlock.offsetTop;

    console.log(linkBlockOffset);

    window.scroll({
      top:linkBlockOffset - headerHeight,
      behavior: 'smooth'
    });

    body.classList.remove('no-scroll');
    page.classList.remove('page--active');
    burger.classList.remove('active');
    nav.classList.remove('active');
  })
});

//header color



window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if(scrollTop > headerHeight) {
      header.style.backgroundColor = 'rgba(0, 0, 0, .9)';

    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, .2)';
    }
});

//pop up

let modalBtn = document.querySelectorAll('[data-modal]');

modalBtn.forEach((item)=> {
  item.addEventListener('click', event => {
    event.stopPropagation();
    let $this = event.currentTarget;
    let btnAtt = $this.getAttribute('data-modal');
    let modalPage = document.getElementById(btnAtt);


    body.classList.add('no-scroll');
    modalPage.classList.add('see');

  })
});

let modalMesseg = document.querySelectorAll('[data-messeg]');

modalMesseg.forEach((item)=> {
  item.addEventListener('click', event => {
    event.stopPropagation();
    let $this = event.currentTarget;
    let parentModal = document.querySelector('.modal.see');
    let btnAtt = $this.getAttribute('data-messeg');
    let modalPage = document.getElementById(btnAtt);

    body.classList.add('no-scroll');
    modalPage.classList.add('see');

    if(parentModal != null) {
      body.classList.remove('no-scroll');
      parentModal.classList.remove('see');
    }

  })
});

//close modal

let close = document.querySelectorAll('.close');

close.forEach((item) => {
  item.addEventListener('click', event => {
    let $this = event.currentTarget;
    let currentModal = $this.closest('.modal');

      body.classList.remove('no-scroll');
      currentModal.classList.remove('see');
  })
});

let modal = document.querySelectorAll('.modal');

modal.forEach((item)=> {
  item.addEventListener('click', event => {
    let $this = event.currentTarget;
    let modalBlock = document.querySelector('.modal__block');

    modalBlock.addEventListener('click', event => {
      event.stopPropagation();
    });

      body.classList.remove('no-scroll');
      $this.classList.remove('see');
  })
})

