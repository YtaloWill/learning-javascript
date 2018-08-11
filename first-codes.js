
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
// functions are little programs in great program

function line() {
    console.log('---------------------------')
}

console.log(married); // result true
line(); // calling function

// Arrays

var languages = ['java', 'c++', 'python'];
console.log(languages[0]); // result java
line();

//objects

var humanPeople = {
    age: 2018,
    name: 'Jesus',
    rich: false,
};

console.log(humanPeople.name); //result Jesus
line();

/*  MATHEMATICAL OPERATIONS
    + plus 
    - minus
    / divided
    * times
    % mod (rest of divided)
    var++ ++var increment
    var-- --var decrement
    var += accumulator
*/

var x = 2, y = 6, z = 9, a = 1, b = 2; 
var result = x + y - z * a / b; // result 3.5

console.log(result);

// change html things

document.getElementById('text').innerText = "It's basically a text";