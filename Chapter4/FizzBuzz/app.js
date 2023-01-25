var main = function () {
  "use strict;"
  
  var $content = $('<ul>'),
      i;
  
  for(i = 1; i <= 100; i++) {
    var text;
    if((i % 3 == 0) && (i % 5 == 0)) {
      text = 'FizzBuzz';
    } else if(i % 5 == 0) {
      text = 'Buzz';
    } else if(i % 3 == 0) {
      text = 'Fizz';
    } else {
      text = i;
    }
    $content.append($("<li>").text(text));
  }

  $('.content').append($content);
};

$(document).ready(main);
