// loop
for(let index = 0; index<10 ; index++){
   console.log(index);
}

const cars =['Ferrari', 'Tesla', 'Mercedes'];
   for(let i = 0; i < cars.length; i++ ){
      console.log(cars[i]);
   }

// for of


for (let car of cars){
   console.log(car);
}

// for each

cars.forEach(function(car, index){
   console.log(index)
   console.log(car)
})

let index = 0 ;
while(index<10){
   //console.log(index)
   //index = index +1;
   index++;
}


const person = {
   name : 'Jane',
   age : 21,
};
for (property in person){
   console.log(person[property]);
}