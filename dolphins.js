const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;
const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3)/3;

console.log("The average of Dolphins is : " + dolphinsAvg);
console.log("The average of Koalas is : " + koalasAvg);

if(dolphinsAvg > koalasAvg && dolphinsAvg >=100){
    console.log('Dolphins Won!');
} else if(koalasAvg > dolphinsAvg && koalasAvg >=100){
    console.log("Koalas Won!")
} else if(dolphinsAvg === koalasAvg && dolphinsAvg>=100){
    console.log("It's a tie!");
} else{
    console.log("No Team won the trophy.")
}