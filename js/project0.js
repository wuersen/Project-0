$( document ).ready(function() {

let countTo9 = 0;

  $( '.box' ).click(function() {
    if ($(this).text()!==''){}

    else if ($(this).hasClass('playedX')){
      $(this).text('O');
      $('.box').removeClass('playedX')
    }else{
    $(this).text('X');
    $('.box').addClass('playedX')
    }



    for (let i = 1; i<4; i++){
         for (let j = 1; j<4; j++){
    if ($(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i}Box${j+1}, #line${i}Box${j+2}`).css('background-color','orange');
        alert('win');
        }
    if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+2}Box${j}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j}, #line${i+2}Box${j}`).css('background-color','orange');
        alert('win')
        }
    if ($(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j+1}`).text()&&
        $(`#line${i+1}Box${j+1}`).text()===$(`#line${i+2}Box${j+2}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i+1}Box${j+1}, #line${i+2}Box${j+2}`).css('background-color','orange');
        alert('win')
        }
    if ($(`#line${i}Box${j}`).text()===$(`#line${i-1}Box${j+1}`).text()&&
        $(`#line${i}Box${j}`).text()===$(`#line${i+1}Box${j-1}`).text()&&
        $(`#line${i}Box${j}`).text()!==''){
        $(`#line${i}Box${j}, #line${i-1}Box${j+1}, #line${i+1}Box${j-1}`).css('background-color','orange');
        alert('win')
        }
    if ($(`#line${i}Box${j}`)==='X'||$(`#line${i}Box${j}`)==='O'){
          alert('draw');
        }
    }//end of inner for-loop
}//end of entire for-loop







}); // end of function

}) //end of code
