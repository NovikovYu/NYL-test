// Показываем липкое меню при прокрутке до него
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } 
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}


// Переключаем табы
$(document).ready(function() {
  $('.tabs-trigger').click(function(e){

    $('.tabs-trigger').removeClass('tabs-trigger--active');
    $('.tab-content').removeClass('tab-content--active');

    $(this).addClass('tabs-trigger--active');
    $($(this).attr('href')).addClass('tab-content--active');
  });

  $('.header-sticky__link:first').click();
});