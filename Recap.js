// Fundamentals
//let, const,var to declare a variable

// let firstName = "Somto";
// if (firstName) {
//     if(firstName.length<3 || typeof firstName){
//         console.error("Please enter a valid name")
//     }else{
//         console.log(`Good morning ${firstName}`);
//     }
// } 
// else {
//     console.log("Please enter your name");
// }


// let score = 40;
// let grade = "";
// if (score >= 70 && score <= 100) {
//     grade = "A";
// } else if (score >= 60 && score < 70){
//     grade = "B";
// } else if(score >= 50 && score < 60){
//     grade = "C";
// } else if(score >= 40 && score < 50){
//     grade = "D";
// } else if(score >=0 && score < 40){
//     grade = "F";
// }
// else{
//     grade = "Wrong score";
// }

// console.log(`grade = ${grade}`);


//switchcase

// let grade = "";
// //  let score = 65;
// let days = "";
// switch (days) {
//     case "Monday":
//         grade = "Today is monday and begining of the week";
//         break;
//     case "Tuesday":
//         grade = "Today is Tuesday and begining of the week";
//         break;
//     case "Wednesday":
//         grade = "Today is wednesday and begining of the week";
//         break;
//     default:
//         break;
// }     


// let number = 3;
// let result = Math.pow(number, 2);

// console.log("The square of: " + result);

// let no = 345.89;
// console.log(Math.floor(no));
// console.log(Math.round(no));
// console.log(Math.ceil(no));


// let tennisPlayers = 10 ;
// let tennisCourt = 2;
function gamesHosted(tennisPlayers,tennisCourt) {
   let allowedPlayers = Math.floor(tennisPlayers/2);
   if (allowedPlayers > tennisCourt ) {
        return tennisCourt;
   }
   return allowedPlayers;
}
console.log(gamesHosted(2,5));