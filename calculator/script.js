const add = () => {
    event.preventDefault()

    let val1 = Number(document.getElementById("value1").value)
    let val2 = Number(document.getElementById("value2").value)
    let display = document.getElementById("display")

    display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 + val2}`
}
const sub = () => {
    event.preventDefault()

    let val1 =(document.getElementById("value1").value)
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The sub of ${val1} and ${val2.value} is ${val1 - val2.value}`
}
const mul = () => {
    event.preventDefault()

    let val1 = document.getElementById("value1").value 
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The mul of ${val1} and ${val2.value} is ${val1 * val2.value}`
}
const div = () => {
    event.preventDefault()

    let val1 = document.getElementById("value1").value 
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The div of ${val1} and ${val2.value} is ${val1 / val2.value}`
}