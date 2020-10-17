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
myValue = 'Four';
var unknown = 4;
unknown = 'try';
