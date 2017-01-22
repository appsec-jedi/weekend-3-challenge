

$(function(){

  var math = '';
  var x = 0;
  var y = 0;
  var operatorHasBeenUsed = false;

  $('.numberButton').on('click', function() {
    if (operatorHasBeenUsed == false ){
      x=$(this).attr('id');
      x=Number(x);
      console.log(x, " clicked");
      $('#container').html('<div>' + x + '</div>');
    } else {
      y=$(this).attr('id');
      x=Number(x);
      console.log(x, " clicked");
      $('#container').empty();
      $('#container').html('<div>' + y + '</div>');
    }

  })


  $('.functionButton').on('click', function() {
    math = $(this).attr('id');
    console.log(math, " clicked");
    operatorHasBeenUsed = true;
  })
  $('#equals').on('click', function() {
    console.log(equals, " clicked");
    operatorHasBeenUsed = false;
    event.preventDefault();
    // var x = $('#x').val();
    // var y = $('#y').val();
    // var math = $(this).attr('id');
    var mathInputs = {X:x, Y:y, z:math};
    // $('form').find('input[type=number]').val('');

    $.ajax({
      url: '/mathFunction/' + math,
      type: 'POST',
      data: mathInputs,
      // success: mathResult()
      success: appendMath
     });
  })


  // $('.button').on('click', function() {
  //   event.preventDefault();
  //   var x = $('#x').val();
  //   var y = $('#y').val();
  //   var math = $(this).attr('id');
  //   var mathInputs = {X:x, Y:y, z:math};
  //   $('form').find('input[type=number]').val('');
  //
  //   $.ajax({
  //     url: '/mathFunction/' + math,
  //     type: 'POST',
  //     data: mathInputs,
  //     // success: mathResult()
  //     success: appendMath
  //    });
  // })

  $('#clear').on('click', function() {
    $('#container').empty();
    var math = '';
    var x = 0;
    var y = 0;
    var operatorHasBeenUsed = false;
  })


  function appendMath(result){
    console.log(result);
    $('#container').empty();
    $('#container').append('<div>' + result.mathResult + '</div>');
}



});
