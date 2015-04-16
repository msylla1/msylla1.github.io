$(document).ready(function(){
$('#add').on("click",function(){
  var value=$('input').val()
$('#1').append("<p>"+value+"</p>")
  });
$('#clear').on("click", function(){
  $('#Shampoo').empty();
});
});
