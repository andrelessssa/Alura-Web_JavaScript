const names = ["rodrigo","André", "joao", "julia", 10 , false];

const joao= names[1];
// adiciona no final
names.push("Pedro");
names.push("Flavio");

console.log(names);
// adiciona no inicio
names.unshift(20);
console.log(names);

// remove o ultimo
names.pop();

names[3] = "GUSTAVO"

const indexOfFelipe = names.indexOf("Felipe")

const sortedNames = names.sort();

console.log(names);

console.log(sortedNames);
