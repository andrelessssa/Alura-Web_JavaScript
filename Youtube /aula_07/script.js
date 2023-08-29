
// condicionais

const sum = 1+3;

if(sum === 2){
   console.log('SUM is 2!');
}else{
   console.log('SUM ins not 2!');
}

// &&
// ||

let number;
if(sum === 2 ){
   number = 2;
}else{
   number = 4
}

console.log(number);

// ou 

let number1 = sum === 2 ? 2 : 4;
console.log(number1);

// s

const car = 'ferrari';

switch(car){
   case 'mercedes':
      console.log('Mercedes é linda')
      break;
   case "ferrari":
      console.log('Ferrari é linda')  
      break; 
}