// 1
var average = function (numbers) {  
  var sumOfNumbers = 0;
  
  numbers.forEach(function(number) {
    sumOfNumbers = sumOfNumbers + number;
  });

  var result = sumOfNumbers/numbers.length;
  
  return result;
};

// 2
var largest = function (numbers) {  
  var largestNumber = 0;
  
  numbers.forEach(function(number) {
    if(number > largestNumber) {
      largestNumber = number;
    }
  });

  return largestNumber;
};

// 3
var even = function (numbers) {  
  var result = false;
  
  numbers.forEach(function(number) {
    if(number % 2 == 0) {
      result = true;
    }
  });

  return result;
};

// 4
var allEven = function (numbers) {  
  var result = true;
  
  numbers.forEach(function(number) {
    if(number % 2 !== 0) {
      result = false;
    }
  });

  return result;
};

// 6
var containsTwo = function (array, string) {  
  var times = 0;
  
  array.forEach(function(element) {
    if(element == string) {
      times++;
    }
  });

  return times > 1;
};

// 7
var containsNTimes = function (array, string, number) {  
  var times = 0;
  
  array.forEach(function(element) {
    if(element == string) {
      times++;
    }
  });

  return times > number - 1;
};
