
// objetos
const person = {
   firstName: 'felipe',
   lastName: 'Rocha',
   age: '21',
   hobbies: ['Assistir F1', 'Jogar futebol','ler']
   
}
//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

// mesma coisa que acima
const{firstName: primeiroNome,lastName,age,hobbies} =
person;


console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

const umHobbies = person.hobbies[2];
console.log(umHobbies);


const todos = [
   {
      id:1,
      description : 'treinar',
      isCompleted : false,
   },
   {
      id:2,
      description : 'Ler',
      isCompleted : true,

   },
   {
      id : 3,
      description : 'Treinar',
      isCompleted : true,
   },

];

console.log(todos);
const descriptionOfLastTodos = todos[2].description;
console.log(descriptionOfLastTodos);