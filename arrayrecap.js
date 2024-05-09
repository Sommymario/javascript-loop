// const cart = ["mango", "fanta", "orange", "eggs", "bread"];
// //length'
// let len = carts.length;
// console.log(len);

// //acess the elements of array
// let first = carts[0];
// console.log(first);
// let last = carts[carts.length -1];
// console.log(last);

// for(let items of carts){
//     console.log(items);
// }

// console.log("********")
// carts.forEach((index,cart)=>console.log(index+":"+cart));
// console.log("*******")

// for(let i=0; i<carts.length;i++)

// //remove last
// let removeLast = carts.pop();
// console.log(removeLast);

// //remove first
// let firstRemoved = carts.shift();
// console.log(carts);

// //add to end of array
// carts.push("Avogadro");
// console.log(carts);

// //add to the begining of an array

// carts.unshift("watermelon");
// console.log(carts);

// //check if an array include an item
// let isMango = carts.include("fanta");







//move all zeros to the end
function moveZero(arr){
    let nonZeroIndex = 0;

    for (let i =0; i<arr.length;i++){
        if(arr[i] !==0){
            [arr[nonZeroIndex],arr[i]] = [arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}
console.log(moveZero(0,2,0,3,9,0,0,6,4,7,0,5,0,1))

