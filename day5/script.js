
// Events
// const myFun = () => {
//     console.log("hello");
//     let display = document.getElementById("display");
//     console.log(display);
//     display.innerHTML = display.innerHTML === "hello" ? "bye" : "hello";

//     for changing the color
//     if(display.innerHTML == "hello")
//         display.style.color = "blue";
//     else{
//         display.style.color = "red";
//     }
// };

// let isShow = true
// const myFun = () => {
    
//     let display = document.getElementById("display")

//     if(isShow) {
//         display.src = "https://dog.ceo/api/breeds/image/random"
//         isShow = !isShow
//     } else {
//         display.src = "https://dog.ceo/api/breeds/image/random"
//         isShow = !isShow
//     }
// }

const changeImage = async () => {
    let imageLink = null;
    let display = document.getElementById("display")
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()
        imageLink = data.message;

    } catch (err) {
        console.log(err);
    }
    display.style.backgroundImage = `url("${imageLink}")`

}

changeImage()



