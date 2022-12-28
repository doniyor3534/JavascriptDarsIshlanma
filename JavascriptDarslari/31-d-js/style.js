// let data = [
//     {name:'dkdddd',familya:'sdkkkkkks'},
//     {name:'dkdddd',familya:'sdkkkkkks'},
//     {name:'dkdddd',familya:'sdkkkkkks'},
// ]
// let input = {
//     ism:'jhsjsjs'
// }
// localStorage.setItem('data',JSON.stringify(data))
// localStorage.setItem('input',JSON.stringify(input))


// localStorage.clear()

let count = document.querySelector(".count")
let incr = document.querySelector(".incr")
let decr = document.querySelector(".decr")
let i = 0
// setInterval(() => {
//     i++
//     count.innerHTML = `${new Date().getHours()} : ${  new Date().getMinutes()} : ${ new Date().getSeconds()}`
// }, 1000);

// function settaimfun(){
//     alert('loader uchtiiii')
// }

// setTimeout(() => {
//     settaimfun()
// }, 5000);



incr.addEventListener('click', () => {
    incr.classList.add('active')
    setTimeout(() => {
        i++
        count.innerHTML = i
        incr.classList.remove('active')
    }, 2000);
})
decr.addEventListener('click', () => {
    decr.classList.add('active')
    setTimeout(() => {
        i--
        count.innerHTML = i
        decr.classList.remove('active')
    }, 2000);
})