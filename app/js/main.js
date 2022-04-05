
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
      if(t.timer <= 0){
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
   
   
   

   