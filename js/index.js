$(".navBar").focus(function(){
    $(this).css("background-color", "#409DC6");
  });

  $("#navigation").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  });