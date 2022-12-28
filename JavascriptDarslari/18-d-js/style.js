// // forEach sicl oreator ////////////////////////////////////////

// let card = document.querySelector('.card')
// let data = ['aaaa','bbb','cccc','eee','fff']
// function btnlar(){
//     data.forEach((e)=>{
//         card.innerHTML +=` <button>${e}</button>`
//     })
// }
// btnlar()
// for(i=0;i<data.length;i++){
//     card.innerHTML +=` <button>${data[i]}</button>`
// }

// for ///////////

// for (i=0;i<= 10;i++){
//     console.log(i);
// }

// for of /////////
// let items = [1,2,3,4,5,6,7,8,9]
// for(let item of items){
//     console.log(item);
// }

// for in ///////////////
// let person = { a: 'aaaaa', b: 'bbbb', d: 'dddd' }
// let arr2 = [ {a: 'aaaaa',},{ b: 'bbbb',} ,{d: 'dddd'} ]
// let text = ''
// let arr = [1, 2, 3, 4]
// console.log(arr);
// arr.foo = 'jsjsj'
// arr.c = 5

// for (let x of arr2) {
//     console.log(x);
// }
// for (let x in arr2) {
//     console.log(x);
//     console.log(arr2[x]);
// }
// console.log(arr);

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

// let h1lar = document.querySelector('.sarlavha')
// let data = ['Ogabek','Fotihjon','Dovutxon','Shamsiddin']
// data.forEach(function(i){
//     console.log(i);
//     h1lar.innerHTML+=`<h1>${i}</h1>`
// })

//map/////
// let items = [{html:'html',gsgsg:'dhdhdh'},{css:'css',html:'dddd'},'javascript',4,5,6,7,8,9]
// let nevMas = items.map(function(i){
//     return  i.html
// })
// console.log(nevMas);

// filter /////////
// let items = [{html:'html',css:'dhdhdh'},{css:'css',html:'dddd'}]
// items.filter(function(i){
//     console.log(i.html);
// })

// let x = 10

// function menifunctionim(){
//     x = 100
//     let x = 100
//     console.log(x);
// }
// menifunctionim()

// console.log(x);

// let btn = document.querySelector('.btn')

// btn.addEventListener('click',()=>{
//     if(btn.className!== 'btn a'){
//         btn.classList.add('a')
//     }else{
//         btn.classList.remove('a')
//     }
// })

// let count = document.querySelector(".count");
// let pilus = document.querySelector(".plus");
// let minus = document.querySelector(".minus");
// let nol = document.querySelector(".nol");

// let countS = 0;
// count.innerHTML = countS;
// pilus.addEventListener("click", () => {
//   countS = countS += 1;
//   count.innerHTML = countS;
// });
// minus.addEventListener("click", () => {
//   countS = countS -= 1;
//   count.innerHTML = countS;
// });
// nol.addEventListener("click", () => {
//   countS = 0;
//   count.innerHTML = countS;
// });






let lampa = document.querySelector(".lampa")
let on = document.querySelector(".on")
let off = document.querySelector(".off")

off.addEventListener('click',()=>{
  lampa.innerHTML = `<img src="../images (2).jfif" alt="" class="lampa">`
})
on.addEventListener('click',()=>{
  lampa.innerHTML = `<img src="../images (3).jfif" alt="" class="lampa">`
})
lampa.addEventListener('click',()=>{
  console.log('djhdjdj');
    lampa.innerHTML = `<img src="../images (1).jfif" alt="" class="lampa">`
})