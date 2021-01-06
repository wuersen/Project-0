$( document ).ready(function() {

// $('.line1,.line2,.line3,.display').css('opacity',0);
$('.line1,.display').fadeTo(1000,0.8)
$('.line2').fadeTo(2000,0.8)
$('.line3').fadeTo(2500,0.8)
$('h1').fadeTo(1000,0.8)
$('.message').fadeTo(1000, 0.8)

//global viariables
let countTo9 = 0;
let player1Score = 0;
let player2Score = 0;


// //Select Player
$('.display').click(function(){
   $('.display').css('border-color','orange')
   $(this).css('border-color','#739900');
   $('.message').text($(this).text().slice(8,10))
   $('.message').text(`${$(this).text().slice(8,10)} turn`);
   $('.display').addClass('selectionMade')
   // $(this).addClass('selected')
   if($(this).text().includes('🍊')){
   $('.box').addClass('playedLemon');
   }

   if($(this).text().includes('🍋')){
   $('.box').removeClass('playedLemon');
   }


}); //end of function




  $( '.box' ).click(function() {
    if(!$('.display').hasClass('selectionMade')){alert('selectPlayer')}

    else if ($(this).text()!==''){}

    else if ($(this).hasClass('playedLemon')){
      $(this).text('🍊');
      $('.box').removeClass('playedLemon')
      countTo9 = countTo9 + 1;
    }else{
    $(this).text('🍋');
    $('.box').addClass('playedLemon')
    countTo9 = countTo9 + 1;
    }



    for (let i = 1; i<4; i++){
         for (let j = 1; j<4; j++){
//winning by have 3 in a row
    if ($(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i}Box${j+1}, #line${i}Box${j+2}`).css('background-color','orange');
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
//winning by having 3 in a column
    if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+2}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j}, #line${i+2}Box${j}`).css('background-color','orange');
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
//winning by having 3 in a line from top left to bottom right
    if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j+1}`).text()&&
        $(`#line${i+1}Box${j+1}`).text()===$(`#line${i+2}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j+1}, #line${i+2}Box${j+2}`).css('background-color','orange');
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
//winning by having 3 in a line from bottm left to top right
    if ($(`#line${i}Box${j}`).text()===$(`#line${i-1}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j-1}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i-1}Box${j+1}, #line${i+1}Box${j-1}`).css('background-color','orange');
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }

    }//end of inner for-loop
}//end of entire for-loop

if ($('.message').text().includes('wins')){
  $('.message').css('background-color', 'yellow');
}

//if its a draw:

if ($('.message').text().includes('wins')===false && countTo9 === 9){
$('.message').text(`🍋 It's a draw 🍊`);
}

if ($('.message').text().includes('🍋 wins')){
  player1Score = player1Score + 1;
$('#player1').text(` Player 🍋 : ${player1Score}`);
}

if ($('.message').text().includes('🍊 wins')){
  player2Score = player2Score + 1;
$('#player2').text(` Player 🍊 : ${player2Score}`);
}

//reset after each game
  $('.message' ).click(function() {
    $('.box').text('');
    $('.display').removeClass('selectionMade');
    $('.display').css('border-color','orange')
    $('.message').css('background-color', 'orange');
    $('.message').text('Select player to go first : 🍋 or 🍊');
    $('.box').css('background-color','yellow');
    $
    countTo9 = 0;

});//end of reset function





}); // end of function

}) //end of code
