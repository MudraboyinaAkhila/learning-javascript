// const a = [10, 20]
// a[0] = 30;

// console.log(a);

// const obj = {
//     id: 1,
//     name: "guest",
//     myData: [10, "hello", "bye bye"]
// }

// console.log(obj.loc);
// console.log(obj);
// console.log(obj.id);
// console.log(obj.myData);

// adding elements in obj

// obj.loc = "hyd",

// console.log(obj);

// const user = [
//     {
//         id: 1,
//         name: "user1",
//         loc: "hyd"
//     },
//     {
//         id: 2,
//         name: "user2",
//         loc: "hyd"
//     },
// ]

// console.log(users[0].name);

// for of - arrays
// for in - objects

// function myFun() {
//     console.log(-1);
//     return -1
// }

// console.log(myFun);
// console.log(myFun());

// adding of two Number
// function add(num1, num2){
//     return num1 + num2
// }
// console.log(add(34, 4));

// const myFun = function add(num1, num2) {
//     return num1 + num2
// }

// console.log(myFun(34, 2));

// function add(num1, num2) {
//     return num1 - num2
// }
// console.log(add(34,3));

// const myFun = function add(num1, num2) {
//     return num1 - num2
// }

// console.log(myFun(34, 2));

Task: 1
const doMath = (num1, num2, op) => {
    switch (op) {
        case "+":
            console.log(`The addition of ${num1} and ${num2} is ${num1 + num2} `);
            break;
        case "-":
            console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);
            break;
        case "*":
            console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);
            break;
        case "/":
            console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);
            break;
        case "%":
            console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2} `);
            break;
        case "**":
            console.log(`The power of ${num1} and ${num2} is ${num1 ** num2} `)
            break;
        default:
            console.log("please pass a Valid Input");
            break;
    }
}

doMath(2, 3, "*")
doMath(2, 3, "+")
doMath(2, 3, "-")
doMath(2, 3, "/")
doMath(2, 3, "%")
doMath(2, 3, "**")
