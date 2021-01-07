Tic Tac Toe

Simple game created from scratch using HTML, CSS and Javascript

My first project at General Assembly

HTML:
  *<head> contains title and links to CSS, animation, javascript, jquery, and google-font.  
  *<h1> and <div> for content of game

CSS:
  *margin: O auto - to center all elements
  *@media for <h1> - better display for mobile phone screen
  *added a 'bounce' animatino to game title.


Javascript:
  *Jquery fadeTo to make elements gradually appear on page.
  *.addClass/removeClass to switch between symbols, same logic used to 'finish' and 'reset' game.

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
