// let a = 10 == 11  && 10 ===10   

// console.log(a);

// let a = 2                          

// if (a > 7 && a < 14) {
//     console.log('a  7 ga teng emas');
// } else if(a==2){
//     console.log('a  2 ga teng ');
// }
// else{
//     console.log('xato son');
// }   







   
// let type='b'

// switch (type) {
//     case 'a':
//           console.log('aaaaaa');
//           break;
//     case 'b':
//         console.log('bbbbbb');
//         break;
//     default:
//          console.log('type yoq');
//          break;
// }


// function decloration////////////////////////

// myFunction()
// function myFunction (){
//      return console.log('function ishladi');
// }
// myFunction()



// function expression///////////////////////////
// myfunction()
// let myfunction= function(){
//     console.log('function ishladi');
// }

// myfunction()




//Return/////////////////////////


// let fun =function (){
//      'djdjdjjdd'
// }
// console.log(fun());


// // ////////////////
// let fun2=function (){
//     return  'djdjdjjdd'
//  }
//  console.log(fun2());


// functiondan kengroq foydalanish/////////////////////////////////////////////////

// function Kattafunc(name, age) {
//        alert(`my name is ${name}`)
//     function menhaqimda() {
//          let data=['html','css','javascript']
//          for(i=0;i<data.length;i++){
//             alert(`men ${data[i]} ni bilaman`)
//          }
//     }
//     menhaqimda()


//     function checkAge(age){
//         if(age>18){
//             alert(`Exactly data for learrning  IT yoshingiz ${age}`)
//         }else if(age < 18 ){
//             alert(`super data for learrning  IT yoshingiz ${age}`)
//         }
//     }
//     checkAge(age)



//     function calcPow(number){
//         return number * number
//     }
//     console.log(calcPow(10));

//}
//Kattafunc('Doniyorbek',25)

// for ///////////

// for (i=0;i<= 10;i++){
//     console.log(i);
// }


// // for of /////////
// let items = [1,2,3,4,5,6,7,8,9,{name:'dfdjjd'}]


// for(let value of items){
//     console.log(value);
// }


// for (let value in items) {
//       console.log(items[value]); 
//       console.log(value); 
// }

// for in ///////////////
// let person = { a: 'aaaaa', b: 'bbbb', d: 'dddd' }
// let text = ''
// let arr = [1, 2, 3, 4]
// console.log(arr);
// arr.foo = 'jsjsj'
// arr.c = 5


// for (let x of arr) {
//     console.log(x + ' bu for of'); 
// }
// for (let x in arr) {
//     console.log(x + ' bu for in'); 
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




// let navLeft = document.querySelector('.navleft')
// let menuBtn = document.querySelector('.menu')
// let menuBoleen = true

// menuBtn.addEventListener('click', () => {
//     if (menuBoleen === true) {
//         navLeft.classList.add('active')
//         menuBoleen = false
//     }
//     else {
//         navLeft.classList.remove('active')
//         menuBoleen = true
//     }
// })

