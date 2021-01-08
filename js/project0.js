$( document ).ready(function() {

// $('.line1,.line2,.line3,.display').css('opacity',0);
$('.line1,.display').fadeTo(1000,0.9)
$('.line2').fadeTo(1000,0.9)
$('.line3').fadeTo(1000,0.9)
$('h1').fadeTo(1000,0.9)
$('.message').fadeTo(1000, 0.9)

$('#mixFruitTop').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500);

$('#mixFruitBtm').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500);

$('#mixFruitLeft').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500);

$('#mixFruitRight').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500);




//global viariables
let countTo9 = 0;
let player = 0 //player1 = 1, player2 = 2

let player1Score = 0;
let player2Score = 0;




/////////////////         1. Choose player           ///////////////////////
$('.display').click(function(){


   if($('.message').text().includes('continue')){

   }else if($(this).text().includes('🍊')){
     $('.display').css('border-color','orange')
     $(this).css('border-color','#739900');
     $('.message').text($(this).text().slice(8,10))
     $('.message').text(`${$(this).text().slice(8,10)} turn`);
     $('.display').addClass('selectionMade')
    player = 2;
   $('.box').addClass('playOrange');

   } else if($(this).text().includes('🍋')){
     $('.display').css('border-color','orange')
     $(this).css('border-color','#739900');
     $('.message').text($(this).text().slice(8,10))
     $('.message').text(`${$(this).text().slice(8,10)} turn`);
     $('.display').addClass('selectionMade')
    player = 1;
   $('.box').removeClass('playOrange');

   }
}) //end of Choose player function

//////////////              2. Play game              /////////////////////
$( '.box' ).click(function() {
//Ask player to select player before playing
    if(!$('.display').hasClass('selectionMade')){alert('Select Player')}

//Disable the game after a player wins so no one can keep playing and players have to start the next round
    else if($('.box').hasClass('gameFinished')){alert('Click continue to restart')}

//make objects appear on game board
    else if ($(this).text()!==''){} //each squre can only be selected once
////switch symbols between players
    else if ($(this).hasClass('playOrange')){
      $(this).text('🍊');
      $('.box').removeClass('playOrange')
      $('.message').text('🍋 turn');
      countTo9 = countTo9 + 1;

    }else{
    $(this).text('🍋');
    $('.box').addClass('playOrange')
    $('.message').text('🍊 turn');
    countTo9 = countTo9 + 1;

    }

//determine winner
         for (let i = 1; i<4; i++){
         for (let j = 1; j<4; j++){
if ($('.message').text().includes('continue')){}
//winning by have 3 in a row
else if ($(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i}Box${j+1}, #line${i}Box${j+2}`).css({'background-color':'orange','font-size': '95px', 'border-bottom':'2px solid green'});
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
//winning by having 3 in a column
else if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+2}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j}, #line${i+2}Box${j}`).css({'background-color':'orange','font-size': '95px', 'border-bottom':'2px solid green'});
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
//winning by having 3 in a line from top left to bottom right
else if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j+1}`).text()&&
        $(`#line${i+1}Box${j+1}`).text()===$(`#line${i+2}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j+1}, #line${i+2}Box${j+2}`).css({'background-color':'orange','font-size': '95px', 'border-bottom':'2px solid green'});
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
//winning by having 3 in a line from bottm left to top right
else if ($(`#line${i}Box${j}`).text()===$(`#line${i-1}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j-1}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i-1}Box${j+1}, #line${i+1}Box${j-1}`).css({'background-color':'orange','font-size': '95px', 'border-bottom':'2px solid green'});
        $('.message').text(`Player ${$(this).text()} wins, click here to continue`);
        }
   }//end of inner for-loop
}//end of entire for-loop

//if its a draw:
if ($('.message').text().includes('wins')===false && countTo9 === 9){
$('.message').text(`🍋 It's a draw 🍊 , click here to continue`);
}

//Change background-color of the message board
if ($('.message').text().includes('continue')){
  $('.message').css('background-color', 'yellow');
}

//Update score
if ($('.display').hasClass('gameFinished')){  //do not update more then once

}else if ($('.message').text().includes('🍋 wins')){
  player1Score = player1Score + 1;
$('#player1').text(` Player 🍋 : ${player1Score}`);

$('#mixFruitTop, #mixFruitBtm, #mixFruitLeft , #mixFruitRight').animate({'opacity': 0}, 10);


$('#movingLemonTop').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);

$('#movingLemonBtm').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);

$('#movingLemonLeft').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);

$('#movingLemonRight').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);
}else if ($('.message').text().includes('🍊 wins')){
  player2Score = player2Score + 1;
$('#player2').text(` Player 🍊 : ${player2Score}`);

$('#mixFruitTop, #mixFruitBtm, #mixFruitLeft , #mixFruitRight').animate({'opacity': 0}, 10);

$('#movingOrangeTop').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);

$('#movingOrangeBtm').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);

$('#movingOrangeLeft').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);

$('#movingOrangeRight').addClass('movingFruit').animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500).animate({'opacity': 0}, 500).animate({'opacity': 1}, 500);
}

//End the game after one player wins (so keep clicking on .box wont mess up result score or game result)
    if ($('.message').text().includes('wins')||  $('.message').text().includes('draw')){
    $('.box').addClass('gameFinished')
    $('.display').addClass('gameFinished')
    }
});


////////////////3. reset game function  ///////////////////////////////////
  $('.message' ).click(function() {
    $('.box').text('');
    $('.box').css('background-color','yellow');
    $('.box').css('border-bottom','none');
    $('.box').css('font-size','80')
    $('.box').removeClass('gameFinished')
    $('.box').removeClass('playOrange');
    $('.display').removeClass('gameFinished')
    $('.message').css('background-color', 'orange');
    $('#player1 , #player2').css('border-color', 'orange');

    $('#movingLemonTop, #movingLemonBtm, #movingLemonLeft , #movingLemonRight').animate({'opacity': 0}, 500);
    $('#movingOrangeTop, #movingOrangeBtm, #movingOrangeLeft , #movingOrangeRight').animate({'opacity': 0}, 500)
    countTo9 = 0;
    if (player === 1){
       $('#player2').css('border-color', '#739900');
       $('.message').text('🍊 turn');
       player = 2;
       $('.box').addClass('playOrange')

   }else if (player === 2){
      $('#player1').css('border-color', '#739900');
      $('.message').text('🍋 turn');
      player = 1;
   }
});//end of reset function




}) //end of code
