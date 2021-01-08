Tic Tac Toe

Published at https://wuersen.github.io/Project-0/

Simple game created from scratch using HTML, CSS and Javascript

My first project at General Assembly

HTML:
  1 head of HTML contains links to CSS, animation, javascript, jquery


CSS:
  1 margin: O auto - to center all elements
  2 @media for better display for mobile phone screen
  3 added a 'bounce' animatino to game title.


Javascript:
  1 Jquery fadeTo to make elements gradually appear on page.
  2 .addClass/removeClass to switch between symbols, same logic used to 'finish' and 'reset' game.

 ```javascript
 if ($(this).hasClass('playOrange')){
   $(this).text('🍊');
   $('.box').removeClass('playOrange')
   $('.message').text('🍋 turn');
   countTo9 = countTo9 + 1;
 }else{
 $(this).text('🍋');
 $('.box').addClass('playOrange')
 $('.message').text('🍊 turn');
 countTo9 = countTo9 + 1;
```
