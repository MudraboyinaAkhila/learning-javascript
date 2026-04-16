

const changeColor = () => {
    let box = document.getElementsByClassName("box")[0]
    let colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

    let randColor = '#'

    for(let i = 0; i < 6; i++){
        let randNo = Math.floor(Math.random() * 16)
        randColor += colorCodes[randNo]
    }
    box.style.backgroundColor = randColor
}