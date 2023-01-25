var main = function () {
  "use strict;"
  $("h1").css("color","red");
  //1.
    $(".important").css("color","red");
  //2. 
    $(".relevant :first-child").css("color","red");
  //3.
    $(".relevant :nth-child(3)").css("color","red");
  //4.
    $("p").css("color","red");
  //5.
    $(".relevant p").css("color","red");
  //6.
    $(".relevant :nth-child(2), .relevant p:odd").css("color","red");
  //7.
    $(".relevant :last-child").css("color","red");
  //8.
    $(".relevant p:gt(3)").css("color","red");
  // 9.
    $(".relevant p:not('.a')").css("color","red");
};

$(document).ready(main);
