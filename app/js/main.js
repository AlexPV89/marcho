

$(function(){
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
       minutes = Math.floor((timer / (1000 * 60) )% 60),
       seconds = Math.floor((timer / (1000) )% 60)
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

   
   
   

   