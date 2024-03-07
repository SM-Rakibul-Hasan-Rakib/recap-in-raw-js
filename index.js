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