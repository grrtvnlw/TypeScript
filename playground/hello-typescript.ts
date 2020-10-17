const sayHello = (name: string) => {
  console.log(name + ", Hello World! ");
};

// sayHello("Gerrit");

const myString: string = "This is a string";

let isTrue: boolean = false;

let maxValue: number = 90;

let decimalValue: number = 100.00;

let hexValue: number = 0xf00d;

let binaryValue: number = 0b1010;

let octalValue: number = 0o744;

// let bigIntValue: bigint = 100n;

let username: string = 'Sally';

let numArray: number[] = [1, 2, 4];
let numArray2: Array<number> = [1, 2, 4];

let isCheckedIn: [boolean, string] = [true, 'Sally']

console.log(isCheckedIn[0])
console.log(isCheckedIn[1])

enum Season {
  Spring = 'Spring',
  Summer = 'Summer',
  Fall = 'Fall',
  Winter = 'Winter'
}

console.log(Season.Summer);

let groceryMap: Map<string, number> = new Map<string, number>(); // constructor to instantiate

groceryMap.set('apple', 3);
groceryMap.set('orange', 2);
console.log(groceryMap.get('apple'));
groceryMap.delete('apple');
console.log(groceryMap);

let grocerySet: Set<string> = new Set<string>(); // constructor to instantiate
grocerySet.add('apple');
grocerySet.add('orange');
console.log(grocerySet);

let myValue: any = 4;
let actuallyNumber: number = myValue as number;
// myValue = 'Four';

let unknown: unknown = 4;
unknown = 'try';

function someFunction(): void {
  console.log('I don\'t return anything');
}

function someOtherFunction(): never {
  throw new Error('Doesn\'t return');
}

let unsetVar: null = null;

let anotherVar: undefined;

// named function
function add(x: number, y: number): number {
  return x + y;
}

// attempting to overload function --add functionality vs. overwrite
class Adder {
  addValues(x: string, y: string): number;

  addValues(x: string, y:string): string;

  addValues(x: any, y: any): any {
    return x + y;
  }
}

let adder: Adder = new Adder();

console.log(adder.addValues('3', '4'));

// anonymous function, type of variable is function signature
let add2: (numOne: number, numTwo: number) => number = (numOne, numTwo) => { return numOne + numTwo };

let add2 = (numOne: number, numTwo: number) => { return numOne + numTwo };

// Union: pipe means age can be a string or number here
let age: string | number;
age = 'Ten';
age = 20;

let formInput: string | null;

interface Teacher {
  subject: string
}

interface CollegeFaculty {
  college: string
}

interface Workshop {
  number: string;
  durationInHours: number;
  subject: string;
  description: string;
  participantCount: number;
}

// Intersection: professor needs both types
let professor: Teacher & CollegeFaculty = {
  subject: 'calculus',
  college: 'College of Math'
}

// creating your own type
type durationInHours = number | string;

let mathClassDuration: durationInHours = 9;


class Pet {
  name: string; 
  owner: string;
  
  constructor(name: string, owner: string) {
    this.name = name;
    this.owner = owner;
  }

  returnOwner() {
    return this.owner;
  }
}

new Pet('Spot', 'Gerrit');