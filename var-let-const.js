
// let: allow it to reassign
// const : do not allow to reassign

const money = 25;
const rich = money + 100;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count);

const numbers = [23, 4, 23, 12, 56];
numbers[1] = 55; 
numbers.push(10, 15, 18);
console.log(numbers);

// object

const student = {
     name: "John Doe",
     age: 25,
     city: "New York"
}
console.log(student);
student.name = "Hamid";
console.log(student);

// loop

let sum = 0;
for (let i = 0; i < 10; i++){
    sum += i;
}
 console.log(sum);