// 1.ES-6
const numbers = [89, 35, 98, 12];
const student = {
  name: 'Salim Khan',
  age: 32,
  movies: ['King khan', 'Dunki']
};
// template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

console.log(about);



const marks = [89, 35, 98, 12];
const students = {
  name: 'Sakib Khan',
  age: 32,
  movies: ['sakib khan', 'Dunki']
};

const abouts = `My marks number is  ${students.age}`

console.log(abouts);

// arrow function 

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 ==  0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1 , num2)

// console.log(getFiftyFive, addThree, addSixtyFive,isEven);