$(document).ready(function() {
  // Знайти всі <h2> з класом "head" і задати зелений колір фону
  $('h2.head').css(`background-color`, `green`);
  
  // Серед знайдених елементів знайти елементи з класом "inner" і задати розмір шрифту 35px
  $('h2.head').find('.inner').css('font-size', '35px');
});

