

$(function(){

  var math = '';
  var x = 0;
  var y = 0;

  // $('.numberButton').one('click', function() {
  //   x=$(this).attr('id');
  //   console.log(x, " clicked");
  //   $('.numberButton').one('click', function() {
  //     y=$(this).attr('id');
  //     console.log(y, " clicked");
  //   })
  // })
  //
  // $('.functionButton').on('click', function() {
  //   math = $(this).attr('id');
  //   console.log(math, " clicked");
  // })
  // $('#equals').on('click', function() {
  //   console.log(equals, " clicked");
  // })

  $('.button').on('click', function() {
    event.preventDefault();
    var x = $('#x').val();
    var y = $('#y').val();
    var math = $(this).attr('id');
    var mathInputs = {X:x, Y:y, z:math};
    $('form').find('input[type=number]').val('');

    $.ajax({
      url: '/mathFunction/' + math,
      type: 'POST',
      data: mathInputs,
      // success: mathResult()
      success: appendMath
     });
  })


  function appendMath(result){
    console.log(result);
    $('#container').empty();
    $('#container').append('<div>' + result.mathResult + '</div>');
}



});
