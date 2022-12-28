let cardImg  = document.querySelector('.cardImg')
let rasmlar  = document.querySelectorAll('.cardImg img')
let next  = document.querySelector('.next')
let prev  = document.querySelector('.prev')
let len = rasmlar.length -1
let n = 0;


function func(){
    if(n> len){
        n= 0
     }else if(n<0){
        n = len
     }
     cardImg.style.left  = `-${n*1000}px `
}

next.addEventListener('click',()=>{
     n+=1
     func()
     deletSetfun()
})
prev.addEventListener('click',()=>{
     n-=1
     func()
     deletSetfun()
})

let funasnc = setInterval(funSet,2000)

function funSet(){
    n++
    func()
}


function deletSetfun(){
    clearInterval(funasnc)
    funasnc= setInterval(funSet,2000)
}

