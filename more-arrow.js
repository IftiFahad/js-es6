const difference = (x, y) => x - y;
const multiply = (a, b) => a * b;
const getAge = (person) => person.age;
const stu = { name: 'habib', age: 22 }
const age = getAge(stu);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5, 9, 11, 15, 20]);
console.log(third);

// no parameters
 
const getPI = () => Math.PI
console.log(getPI());