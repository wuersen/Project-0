$( document ).ready(function() {

// $('.line1,.line2,.line3,.display').css('opacity',0);
$('.line1,.display').fadeTo(1000,0.9)
$('.line2').fadeTo(2000,0.9)
$('.line3').fadeTo(2500,0.9)
$('h1').fadeTo(1000,0.9)
$('.message').fadeTo(3000, 0.9)






let countTo9 = 0;

  $( '.box' ).click(function() {
    if ($(this).text()!==''){}

    else if ($(this).hasClass('playedX')){
      $(this).text('🍊');
      $('.box').removeClass('playedX')
      countTo9 = countTo9 + 1;
    }else{
    $(this).text('🍋');
    $('.box').addClass('playedX')
    countTo9 = countTo9 + 1;
    }



    for (let i = 1; i<4; i++){
         for (let j = 1; j<4; j++){
//winning by have 3 in a row
    if ($(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i}Box${j+1}, #line${i}Box${j+2}`).css('background-color','orange');
        $('.message').text(`Player${$(this).text()}wins`);
        }
//winning by having 3 in a column
    if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+2}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j}, #line${i+2}Box${j}`).css('background-color','orange');
        $('.message').text(`Player${$(this).text()}wins`);
        }
//winning by having 3 in a line from top left to bottom right
    if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j+1}`).text()&&
        $(`#line${i+1}Box${j+1}`).text()===$(`#line${i+2}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j+1}, #line${i+2}Box${j+2}`).css('background-color','orange');
        $('.message').text(`Player${$(this).text()}wins`);
        }
//winning by having 3 in a line from bottm left to top right
    if ($(`#line${i}Box${j}`).text()===$(`#line${i-1}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j-1}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i-1}Box${j+1}, #line${i+1}Box${j-1}`).css('background-color','orange');
        $('.message').text(`Player${$(this).text()}wins`);
        }
    }//end of inner for-loop
}//end of entire for-loop

//if no player wins:
     if (countTo9 === 9){
     $('.message').text(`🍋 It's a draw 🍊`);
     }




}); // end of function

}) //end of code
