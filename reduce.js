let numbers = [1,4,6,8];

/*let sum = 0;
for(let num of numbers){
    sum+=num;
}
console.log(sum);*/

let sum  = numbers.reduce((acc,curVal)=>acc+curVal,0);
// console.log("sum: "+sum);

// const scores = [[80,100],[60,70],[30,50]];
// const allScores = scores.reduce((acc,curVal)=>acc.concat(curVal),[]);
// console.log(allScores);


// const fruits = ["banana","mango","banana","lemon","apple","carrot"];

// const occurence = fruits.reduce((acc,fruit) =>{
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// },{});
// console.log(occurence);


const nos = [60,20,30,80,10];
const maxNo = nos.reduce(
    (max, curValue) => (curValue < max ? (curValue=max) : curValue),
    nos[0]
)
console.log(maxNo);