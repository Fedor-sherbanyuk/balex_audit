const animItems=document.querySelectorAll('.activeNew');
if(animItems.length>0){
    window.addEventListener('scroll',animOnScroll);
    function  animOnScroll(params){
        for (let i = 0; i < animItems.length; i++) {
            const anmItem=animItems[i];
            //высота объекта
            const animItemHeight=anmItem.offsetHeight;
            //позиция объекта относительно сверху страницы
            const animItemOffset =offset(anmItem).top;
            //Коэффициент старта анимации
            const animStart=4;
//Высота окна браузера минус высота объекта деленная на наш коэффициент
            let animItemPoint=window.innerHeight - animItemHeight/animStart;

            //Если анимированный объект выше окна браузера
            if(animItemHeight>window.innerHeight){
                //Высота окна браузера минус высота окна браузера на наш коэффициент
                animItemPoint=window.innerHeight - window.innerHeight/animStart;
            }
            //Если прокрутили больше чем позиция объекта точка старта, но при этом прокрутили меньше позиция объекта +его высота
            if((pageYOffset>animItemOffset-animItemPoint)&&
                pageYOffset<(animItemOffset+animItemHeight)){
                anmItem.classList.add("full_active_text")
            }else{
                if(!anmItem.classList.contains('anim-no-hide')){
                    anmItem.classList.remove("full_active_text");
                }

            }
        }
    }
    function offset(e){
        const rect=e.getBoundingClientRect(),
            scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
            scrollTop=window.pageYOffset||document.documentElement.scrollTop;
            return{ top:rect.top +scrollTop, left:rect.left+scrollLeft}
    }
    setTimeout(()=>{
        animOnScroll();
    },400);

}
let carousel = document.querySelector('#myCarousel');
let carouselItems = carousel.querySelectorAll('.carousel-item');
let windowWidth = window.innerWidth;
let currentIndex = 0;
let itemsPerSlide = (windowWidth < 780) ? 4 : 4;// Количество отображаемых слайдов на экране

let totalItems = carouselItems.length;

// Функция для переключения слайдов
function switchSlide() {
    for (let i = 0; i < carouselItems.length; i++) {
        if (i >= currentIndex && i < currentIndex + itemsPerSlide) {
            carouselItems[i].classList.add('active');
        } else {
            carouselItems[i].classList.remove('active');
        }
    }

    currentIndex += itemsPerSlide;
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
}

// Периодический вызов функции для переключения слайдов
setInterval(switchSlide, 800); // Интервал 0.8 секунды (800 миллисекунд)



//
// // Получение элементов слайдов и карусели
// let carousel = document.getElementById('carousel');
// let slides = carousel.getElementsByClassName('slide');
//
// // Переменные для отслеживания текущего слайда и таймера
// let currentSlide = 0;
// let timer;
//
// // Функция для переключения слайдов
// function showSlide() {
//     // Скрытие предыдущего слайда
//     slides[currentSlide].style.display = 'none';
//
//     // Увеличение индекса текущего слайда
//     currentSlide++;
//
//     // Если достигнут конец слайдов, переход к первому слайду
//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }
//
//     // Показ текущего слайда
//     slides[currentSlide].style.display = 'block';
// }
//
// // Запуск карусели
// function startCarousel() {
//     // Показ первого слайда
//     slides[currentSlide].style.display = 'block';
//
//     // Установка интервала
//     timer = setInterval(showSlide, 800); // Интервал в миллисекундах (0.8 секунды)
// }
//
// // Остановка карусели
// function stopCarousel() {
//     // Скрытие текущего слайда
//     slides[currentSlide].style.display = 'none';
//
//     // Очистка интервала
//     clearInterval(timer);
// }
//
// // Запуск карусели при загрузке страницы
// startCarousel();


// <!--        <div class="m-5 col-sm-10 alert-primary d-flex justify-content-center">-->
// <!--            <h2 class="photo_feature_text activeNew text"> АУДИТ</h2>-->
// <!--        </div>-->
// <!--            <div class="photo_feature activeNew"></div>-->