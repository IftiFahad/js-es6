const max = Math.max(10, 20, 30, 40, 50, 60, 70);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

const nums = [5, 7, 9, 12];
const nums2 = nums;
const nums3 = [...nums];
console.log(nums3);
nums.push(15);
console.log(nums3); 
console.log(nums);
