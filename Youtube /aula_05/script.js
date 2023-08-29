// JSON
// quando estamos transitando das com um front , a gente transita pelo
//JSON

// nesse exemplo para que ele envie vamos enviar fia json

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

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);
const todosList = JSON.parse(todosJSON);

console.log(todosList);
