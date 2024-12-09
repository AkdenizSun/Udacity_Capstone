const swiper = new Swiper('.swiper',{
    slidePerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            //will set 'translateZ(-400px)' on previous slides
        translate: [0, 0, -400],
        },
        next: {
            //will set 'translateX(100%)' on previous slides
        translate: ["100%", 0, 0],
        },
    },
    loop: true,
    directional: "horizontal",

    autoplay:{
        delay: 5000,
    },

    speed: 400,
    spaceBetween: 100,
})

const swiper2 = new Swiper('.swiper2',{
    slidesPerView: 3,           // Количество слайдов, видимых одновременно
    spaceBetween: 35,          // Расстояние между слайдами
    slidesPerGroup: 1,          // Количество слайдов, прокручиваемых за раз
    loop: true,                 // Бесконечное пролистывание
    //effect: 'fade',             // Эффект затухания
    fade: true,
    //centeredSlides: true,       // Центрирование активного слайда
    centerSlide: true,
    grabCursor: true,           // Курсор-рука для интерактивности
    loopFillGroupWithBlank: true, // Заполнение пустыми слайдами в режиме loop


    autoplay:{                  // Автоматическая смена слайдов каждые 5 секунд
        delay: 5000,
    },
    speed: 400,                  // Скорость перехода между слайдами (в мс)      
    
    
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        968: {
          slidesPerView: 3,
        },
      },
});

const swiper3 = new Swiper('.swiper3',{
  slidesPerView: 2,           // Количество слайдов, видимых одновременно
  spaceBetween: 35,          // Расстояние между слайдами
  slidesPerGroup: 1,          // Количество слайдов, прокручиваемых за раз
  loop: true,                 // Бесконечное пролистывание
  //effect: 'fade',             // Эффект затухания
  fade: true,
  //centeredSlides: true,       // Центрирование активного слайда
  centerSlide: true,
  grabCursor: true,           // Курсор-рука для интерактивности
  loopFillGroupWithBlank: true, // Заполнение пустыми слайдами в режиме loop


  autoplay:{                  // Автоматическая смена слайдов каждые 5 секунд
      delay: 5000,
  },
  speed: 400,                  // Скорость перехода между слайдами (в мс)      
  
  
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      968: {
        slidesPerView: 2,
      },
    },
});

const swiper4 = new Swiper('.swiper4',{
  slidesPerView: 1,           // Количество слайдов, видимых одновременно
  spaceBetween: 95,          // Расстояние между слайдами
  slidesPerGroup: 1,          // Количество слайдов, прокручиваемых за раз
  loop: true,                 // Бесконечное пролистывание
  //effect: 'fade',             // Эффект затухания
  fade: true,
  //centeredSlides: true,       // Центрирование активного слайда
  centerSlide: true,
  grabCursor: true,           // Курсор-рука для интерактивности
  loopFillGroupWithBlank: true, // Заполнение пустыми слайдами в режиме loop


  autoplay:{                  // Автоматическая смена слайдов каждые 5 секунд
      delay: 5000,
  },
  speed: 400,                  // Скорость перехода между слайдами (в мс)      
  
  
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      968: {
        slidesPerView: 1,
      },
    },
});