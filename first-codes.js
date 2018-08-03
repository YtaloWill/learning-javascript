// all errors are shown on console from browser

alert('Hello World! :D \nLets go to codes!');
/*
    create variables with first letter low and other word with high
    and the variables can be maked in a line
    variable null are empty and '' are text without valor

    word reserved for system: var, function, break, return, continue, etc
*/

var ageFriend = 30;
var president = 'Trump';
var married = true;

alert(ageFriend + '\n' + president);

// console.log is a command for write no console from browser

console.log(married); // result true
console.log('---------------------------');

// Arrays

var languages = ['java', 'c++', 'python'];
console.log(languages[0]); // result java
console.log('---------------------------');

//objects

var humanPeople = {
    age: 2018,
    name: 'Jesus',
    rich: false,
};

console.log(humanPeople.name); //result Jesus
console.log('---------------------------');

/*  MATHEMATICAL OPERATIONS
    + plus 
    - minus
    / divided
    * times
    var++ ++var increment
    var-- --var decrement
    var += accumulator
*/

var x = 2, y = 6, z = 9, a = 1, b = 2; 
var result = x + y - z * a / b; // result 3.5

console.log(result);