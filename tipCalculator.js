const bill = 430;
console.log(`Your bill is : \$${bill}`)
let tip;

// //Using if-else
// if(bill>= 50 && bill<=300){
//     tip = bill*0.15;
//     console.log(`Tip is : \$${tip} i.e.15%`);
// } else{
//     tip = bill*0.2;
//     console.log(`Tip is : \$${tip} i.e.20%`);
// }


// //Using ternary operator
// console.log(`Tip is : \$${(bill>=50 && bill<=300) ? bill*0.15 : bill*0.2 }`);

//Total
console.log(`The bill was ${bill}, the tip was ${tip = (bill>=50 && bill<=300) ? bill*0.15 : bill*0.2}, and the total value ${bill + tip}`);