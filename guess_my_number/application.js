$(document).ready(function(){
  var number = Math.floor(Math.random()*100);
  
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    var guess = $('input').val(); //This determines whether the guess is the same or if it is higher or lower.
    if (number === guess)
     {
      alert("Excellent Job!")
     }
    else if (number < guess)
     {
      alert("Guess Lower")//This tells the user to find a guess that is higher.
     }
    else
    {
      alert("Guess Higher") 
    }
  });
});
