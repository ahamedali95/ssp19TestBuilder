// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long
//   Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
//   Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and 
// a length of 16, 18, or 19.
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent 
// conflict, you should choose the network with the longer prefix.

var detectNetwork = function(cardNumber) {
  if (isAmericanExpress(cardNumber)) {
  	return "American Express";
  } else if (isDinersClub(cardNumber)) {
  	return "Diner\'s Club";
  } else if (isMasterCard(cardNumber)) {
  	return "MasterCard";
  } else if (isSwitch(cardNumber)) {
  	return "Switch";
  } else if (isDiscover(cardNumber)) {
  	return "Discover";
  } else if (isMaestro(cardNumber)) {
  	return "Maestro";
  } else if (isChinaUnionPay(cardNumber)) {
    return "China UnionPay"
  } else if (isVisa(cardNumber)) {
    return "Visa";
  }

  return -1;
};

function isAmericanExpress(cardNumber) {
  var prefixes = ["34", "37"];
  
  return (prefixes.indexOf(cardNumber.slice(0, 2)) !== -1 && cardNumber.length === 15);
}

function isDinersClub(cardNumber) {
  var prefixes = ["38", "39"];
  
  return (prefixes.indexOf(cardNumber.slice(0, 2)) !== -1 && cardNumber.length === 14);
}

function isMasterCard(cardNumber) {
  var prefixes = ["51", "52", "53", "54", "55"];

  return (prefixes.indexOf(cardNumber.slice(0, 2)) !== -1 && cardNumber.length === 16);
}

function isVisa(cardNumber) {
  var lengths = [13, 16, 19];

  return (cardNumber.slice(0, 1) === "4" && lengths.indexOf(cardNumber.length) !== -1);
}

function isDiscover(cardNumber) {
  var prefixes = ["644", "645", "646", "647", "648", "649", "6011", "65"]
  var lengths = [16, 19];

  return ((prefixes.indexOf(cardNumber.slice(0, 3) !== -1) 
  || prefixes.indexOf(cardNumber.slice(0, 4)) !== -1 
  || prefixes.indexOf(cardNumber.slice(0, 2)) !== -1) 
  && (lengths.indexOf(cardNumber.length) !== -1));
}

function isMaestro(cardNumber) {
  var prefixes = ["5018", "5020", "5038", "6304"];
  var lengths = [12, 13, 14, 15, 16, 17, 18, 19];

  return (prefixes.indexOf(cardNumber.slice(0, 4)) !== -1 && lengths.indexOf(cardNumber.length) !== -1);
}

function isChinaUnionPay(cardNumber) {
  var lengths = [16, 17, 18, 19];
  var prefixes = (function () {
    var arr = [];
    for (var i = 622126; i < 622926; i++) {
      arr.push(i.toString());
    }

    for (var j = 6282; j < 6289; j++) {
      arr.push(j.toString());
    }

    arr.push("624", "625", "626");

    return arr;
  }) ();

  return ((prefixes.indexOf(cardNumber.slice(0, 6)) !== -1 
  || prefixes.indexOf(cardNumber.slice(0, 4)) !== -1 
  || prefixes.indexOf(cardNumber.slice(0, 3)) !== -1) 
  && (lengths.indexOf(cardNumber.length) !== -1));
}

function isSwitch(cardNumber) {
  var lengths = [16, 18, 19];
  var prefixes = ["4903", "4905", "4911", "4936", "6333", "6759", "564182", "633110"];

  return ((prefixes.indexOf(cardNumber.slice(0, 4)) !== -1 
  || prefixes.indexOf(cardNumber.slice(0, 6)) !== -1) 
  && (lengths.indexOf(cardNumber.length) !== -1));
}


console.log(detectNetwork("5400000000000000"))