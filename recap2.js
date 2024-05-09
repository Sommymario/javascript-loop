// 

// let score = 80;
// let grade ="";
// if(score>=70 && score<=100){
//     grade = "A"
// }
// else if(score>= 60 && score < 70){
//     grade ="8"
// }


// let grade =""
// let days = "monday"
// switch (days)



// let number = 3;
// let result = Math.pow(number,2)
// console.log("The square of: " + result);
// let no = 345.89;
// console.log(Math.floor(floor));



function solution(p,c){
    let allowedPlayers = Math.floor(p/2);

    if(allowedPlayers > c){
        return c;
    }
    return allowedPlayers;
}
console.log(solution(10,3));