Tic Tac Toe

Simple game created from scratch using HTML, CSS and Javascript

My first project at General Assembly

HTML:
  1 <head> contains title and links to CSS, animation, javascript, jquery, and google-font.  
  2 <h1> and <div> for content of game

CSS:
  1 margin: O auto - to center all elements
  2 @media for <h1> - better display for mobile phone screen
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
