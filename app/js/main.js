
let arr = [1,3,4,5,6,7,8,9,22,33,44,55,66]

function binarySearch (arr, el) {
  let low = 0;
  let hight = arr.length -1;

  while(low <= hight){
    let mid = Math.floor((low + hight) / 2);
    if(arr[mid] === el) return mid;

    if(arr[mid] < el) low = mid + 1;
    if(arr[mid] > el) hight = mid -1;
  }
  return -1;
}
console.log(binarySearch(arr, 66))
 

$(function(){
  
  $('.blog-page__slider').slick({
    prevArrow:'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g><path d="M 5.25 12.25 C 5.027344 12.25 4.800781 12.164062 4.632812 11.992188 L 0.257812 7.617188 C -0.0859375 7.277344 -0.0859375 6.722656 0.257812 6.382812 L 4.632812 2.007812 C 4.972656 1.664062 5.527344 1.664062 5.867188 2.007812 C 6.210938 2.347656 6.210938 2.902344 5.867188 3.242188 L 2.113281 7 L 5.871094 10.757812 C 6.210938 11.097656 6.210938 11.652344 5.871094 11.996094 C 5.699219 12.164062 5.472656 12.25 5.25 12.25 Z M 5.25 12.25 "/></g></svg></button>',
    nextArrow:'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7px" height="14px" viewBox="0 0 7 14" version="1.1"><g id="surface1"><path  d="M 1.75 12.25 C 1.527344 12.25 1.300781 12.164062 1.132812 11.992188 C 0.789062 11.652344 0.789062 11.097656 1.132812 10.757812 L 4.890625 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.367188 2.003906 L 6.742188 6.378906 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.617188 L 2.367188 11.992188 C 2.199219 12.164062 1.972656 12.25 1.75 12.25 Z M 1.75 12.25 "/></g></svg></button>',
    infinite: false,
  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll:1,
    draggable: false,
    vertical: true
  })
  $('.product-slide__big').slick({
    asNavFor:'.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  })
  const btn = document.querySelectorAll('.shop-content__filter-btn');
  let product = document.querySelectorAll('.product-item')

  btn.forEach((el,i) => {
    
  el.addEventListener('click',function () {
    
      btn.forEach(el => el.classList.remove('shop-content__filter-btn--active'))
      
      if(el === btn[i]){
        el.classList.toggle('shop-content__filter-btn--active')
      }
   

      if(el.classList.contains('button-grid')){
       
       product.forEach(el => {
        el.classList.remove('product-item--list')
         el.classList.add('product-item--grid')
       })
        
        
      }
      if(el.classList.contains('button-list')){
       product.forEach(el => {
         el.classList.remove('product-item--grid')
        el.classList.add('product-item--list')
      })}
    

  })
  })

  $('.select-stylep, .product-one__item-num').styler()
  let from = document.querySelector('.filter-price__from'),
            to = document.querySelector('.filter-price__to')

    $(".filter-price__input").ionRangeSlider({
      type:"double",
      prifix: '$',
      onStart: function (data) {
        from.innerHTML = `$${data.from}`;
        to.innerHTML = `$${data.to}`;
    },
      onChange: function (data) {
        from.innerHTML = `$${data.from}`;
        to.innerHTML = `$${data.to}`;
      }
    });
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000
        
    })
    $(".star").rateYo({
        starWidth: '17px',
        normalFill: '#ccccce',
        ratedFill: '#ffc35b',
        readOnly: true,
        starSvg:'<svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style="stroke:none;"d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 "/></g></svg>',
      });
      $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
        
    } );
   const deadLine = document.querySelector('.promo__clock-item').getAttribute('data-time')

function getZero (time) {
  return  (time >= 0 && time < 10) ? `0${time}` : time; 
}
function getTime (endTime) {
 const timer = Date.parse(endTime) - Date.parse(new Date()),
       days = Math.floor(timer / (1000 * 60 * 60 * 24)),
       hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
       minutes = Math.floor((timer / (1000 * 60) ) % 60),
       seconds = Math.floor((timer / (1000) ) % 60)
      
  return {
    t: timer,
    days : getZero(days),
    hours: getZero(hours),
    minutes: getZero(minutes),
    seconds: getZero(seconds)
  }
}
 
function setClock (selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('.promo__days'),
          hours = timer.querySelector('.promo__hours'),
          minutes = timer.querySelector('.promo__minutes'),
          seconds = timer.querySelector('.promo__seconds'),
          timeInterval = setInterval(updateClock, 1000);
          updateClock()

    function updateClock () {
      let t = getTime(deadLine);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      if(t.t <=0){
        clearInterval(timeInterval)
      }
    }
   
}
setClock('.promo__clock', deadLine)
})
let productTabs1 = document.querySelector('.product-tabs__top');
let tabsItems1 = document.querySelectorAll('.product-tabs__top-item');
let tabsContent = document.querySelectorAll('.product-tabs__content-item');

function showActiveTab (e) {
    e.preventDefault();
        if(e.target.classList.contains('product-tabs__top-item')) {
          tabsItems1.forEach((el, i) =>{
            el.classList.remove('product-tabs__top-item--active')
            if(el === e.target)
            showTabCantent(i)
          })
          e.target.classList.add('product-tabs__top-item--active')
         
        }   
}
function showTabCantent (i) {
  tabsContent.forEach(el => {
    el.classList.remove('product-tabs__content-item--active')
  })
  tabsContent[i].classList.add('product-tabs__content-item--active')
}
productTabs1.addEventListener('click',showActiveTab)
   
   
   

   