// // forEach sicl oreator ////////////////////////////////////////

let card = document.querySelector(".card");
// let data = ['aaaa','bbb','cccc','eee','fff']
// let data = [
//     {id:0,ism:'Shamsiddin',yoshi:16},
//     {id:1,ism:'Muhammad',yoshi:16},
//     {id:2,ism:'Murodjon',yoshi:16},
// ]
// data.forEach((value)=>{
//     console.log(value);
// })

// const fun =()=>{
//     data.forEach((e)=>{
//         card.innerHTML += `<button>${e.ism}</button>`
//         // console.log(e.ism);
//     })
// }
// fun()
// function btnlar(){
//     data.forEach((e)=>{
//         card.innerHTML +=` <button>${e}</button>`
//     })
// }
// btnlar()

// for(i=0;i<data.length;i++){
//     card.innerHTML +=` <button>${data[i].ism}</button>`
// }
// console.log(data[1]);

// for ///////////

// for (i=0;i< 10;i++){
//     console.log(i);
// }

// for of /////////
// let items = [1,2,3,4,5,6,7,8,9]
// for(let item of items){
//     console.log(item);
// }

// for in ///////////////
let person = { a: "aaaaa", b: "bbbb", d: "dddd" };
let arr2 = [{ a: "aaaaa" }, { b: "bbbb" }, { d: "dddd" }];
let text = "";
let arr = [1, 2, 3, 4];
// console.log(arr);
arr2.foo = "jsjsj";
arr2.c = 5;

// for (let x of arr2) {
//     console.log(x);
// }
// for (let x in arr2) {
//     console.log(x);
//     // console.log(arr2[x]);
// }
// console.log(arr2);

// for (let x in person) {
//     text += person[x]
//     console.log(x + ' bu x');
//     console.log(text + ' bu text');
//     console.log(person[x] + ' bu personni x chisi');
// }

// foreach///////////////
// let items = ['html','css','javascript',4,5,6,7,8,9]
// items.forEach(function(i){
//     console.log(i);
// })

let h1lar = document.querySelector(".sarlavha");
// let data = ['Ogabek','Fotihjon','Dovutxon','Shamsiddin']
// data.forEach(function(i){
//     console.log(i);
//     h1lar.innerHTML += `<h1>${i}</h1>`
// })

//map/////
// let items = [{html:'html',gsgsg:'dhdhdh'},{css:'css',html:'dddd'},'javascript',4,5,6,7,8,9]
// let nevMas = items.map(function(i){
//         if( i %2 === 0){
//            return i + 'juft'
//         }else{
//           return i + 'toq'
//         }
// })
// console.log(nevMas);

// let data = [1,2,3,4,5,5,6,677,7,788,8,989,]
// console.log(data.map((e)=>{
//     if(e%2===0){
//         return e
//     }
// }));
// data.map((e)=>{
//     h1lar.innerHTML += `<button>${e}</button>`
// })

// filter /////////
// let natija = data.filter(function(i){
//     return i%2===0
// })
// console.log(natija);

// let x = 0

// function menifunctionim(){
//     x = 100
//     // let x = 100
//     // console.log(x);
// }
// menifunctionim()
// console.log(x);

// console.log(x);

// let btn = document.querySelectorAll(".btn");
// btn.forEach((e, i) => {
//   e.addEventListener("click", () => {
//     if (e.className !== "btn a") {
//       e.classList.add("a");
//     } else {
//       e.classList.remove("a");
//     }
//   });
// });

// let cards = document.querySelector('.cards')
// for(i=0;i<10;i++){
//     cards.innerHTML+= `<button class='btn' onclick={btnclick(${i})} >btn</button>`
// }
// let btn = document.querySelectorAll('.btn')
// console.log(btn);
// function btnclick(i){
//     btn.forEach((e,d)=>{
//         if(btn[d]=== btn[i]){
//             e.classList.add('a')
//         }else {
//             e.classList.remove('a')
//         }
//     })
// }