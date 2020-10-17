var sayHello = function (name) {
    console.log(name + ", Hello World! ");
};
// sayHello("Gerrit");
var myString = "This is a string";
var isTrue = false;
var maxValue = 90;
var decimalValue = 100.00;
var hexValue = 0xf00d;
var binaryValue = 10;
var octalValue = 484;
// let bigIntValue: bigint = 100n;
var username = 'Sally';
var numArray = [1, 2, 4];
var numArray2 = [1, 2, 4];
var isCheckedIn = [true, 'Sally'];
console.log(isCheckedIn[0]);
console.log(isCheckedIn[1]);
var Season;
(function (Season) {
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
    Season["Fall"] = "Fall";
    Season["Winter"] = "Winter";
})(Season || (Season = {}));
console.log(Season.Summer);
var groceryMap = new Map(); // constructor to instantiate
groceryMap.set('apple', 3);
groceryMap.set('orange', 2);
console.log(groceryMap.get('apple'));
groceryMap["delete"]('apple');
console.log(groceryMap);
var grocerySet = new Set(); // constructor to instantiate
grocerySet.add('apple');
grocerySet.add('orange');
console.log(grocerySet);
var myValue = 4;
var actuallyNumber = myValue;
// myValue = 'Four';
var unknown = 4;
unknown = 'try';
function someFunction() {
    console.log('I don\'t return anything');
}
function someOtherFunction() {
    throw new Error('Doesn\'t return');
}
var unsetVar = null;
var anotherVar;
// named function
function add(x, y) {
    return x + y;
}
// attempting to overload function --add functionality vs. overwrite
var Adder = /** @class */ (function () {
    function Adder() {
    }
    Adder.prototype.addValues = function (x, y) {
        return x + y;
    };
    return Adder;
}());
var adder = new Adder();
console.log(adder.addValues('3', '4'));
// anonymous function, type of variable is function signature
var add2 = function (numOne, numTwo) { return numOne + numTwo; };
var add2 = function (numOne, numTwo) { return numOne + numTwo; };
// Union: pipe means age can be a string or number here
var age;
age = 'Ten';
age = 20;
var formInput;
// Intersection: professor needs both types
var professor = {
    subject: 'calculus',
    college: 'College of Math'
};
var mathClassDuration = 9;
var Pet = /** @class */ (function () {
    function Pet(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    Pet.prototype.returnOwner = function () {
        return this.owner;
    };
    return Pet;
}());
new Pet('Spot', 'Gerrit');
