$(document).ready(function(){
  var number = Math.floor(Math.random()*100);
  
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    var guess = $('input').val();
    if (number === guess)
     {
      console.log("Excellent Job!")
     }
    else if (number < guess)
     {
      console.log("Guess Lower")
     }
    else
    {
      console.log("Guess Higher") 
    }
  });
});
