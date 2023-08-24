// Declaring and storing weights and heights
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);

const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log("Mark Weight : " + markWeight);
console.log("Mark Height : " + markHeight);
console.log("BMI of Mark : " + markBMI);

console.log("John Weight : " + johnWeight);
console.log("John Height : " + johnHeight);
console.log("BMI of John : " + johnBMI);

const markHigherBMI = markBMI > johnBMI;
if(markHigherBMI) 
    console.log(`Mark's BMI (${markBMI}) is higher than John`)
else
    console.log(`John's BMI (${johnBMI}) is higher than Mark`)