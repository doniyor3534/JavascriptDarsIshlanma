let cards = document.querySelector('.cards')
let likeCount = document.querySelector('.like span')
let savatCount = document.querySelector('.savat span')
let savatbtn = document.querySelector('.savat')
let modall = document.querySelector('.modall')
let close = document.querySelector('.close')

let data = [
    {id:1,narx:1300,count:1,img:'./images.png',name:'jsjsjs',savat:false,like:false},
    {id:2,narx:16600,count:1,img:'./images.jfif',name:'eee',savat:false,like:false},
    {id:3,narx:17700,count:1,img:'./images2.jfif',name:'rrrrr',savat:false,like:false},
    {id:4,narx:12200,count:1,img:'./images3.jfif',name:'jjjj',savat:false,like:false},
]


function dataforech(){
    cards.innerHTML =''
    data.forEach((val, i) => {
        cards.innerHTML += `
        <div class="card" key='${val.id}' >
            <img src=${val.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">name :${val.name}</h5>
                <h6 class="card-title">narxi :${val.narx} $</h6>
                <h2 class="card-title">soni :${val.count}</h2>
                <button onclick='savatfun(${i})' class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                </svg></button>
                <button  onclick='likefun(${i})' class="btn btn-outline-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg></button>
            </div>
        </div>
        `
    })
}
dataforech()
function savatfun(i){
    data.map((val,x)=>{
        if(i===x){
            val.savat = val.savat ==false?true:false
        }
    })
    result()
    console.log(data);
}
function likefun(i){
    data.map((val,x)=>{
        if(i===x){
            val.like = val.like ==false?true:false
        }
    })
    result()
    console.log(data);
}

function result(){
    savat = data.filter(val=>val.savat ===true)
    savatCount.textContent = savat.length


    like = data.filter(val=>val.like ===true)
    likeCount.textContent = like.length
}

let menu = document.querySelector('.menu')
let navUl = document.querySelector('.navUl')
menu.addEventListener('click',()=>{
    if(navUl.className=="navUl mb-0 d-flex gap-2 active"){
        navUl.classList.remove('active')
    }else{
        navUl.classList.add('active')
    }
})

// modal 
let modalMalumot = document.querySelector('.modalMalumot')
let savatCountTotal = document.querySelector('.savatCountTotal')
function modalforech(){
    savatdata = data.filter((val)=>val.savat == true)
    modalMalumot.innerHTML =''
   savatdata.forEach((val, i) => {
        modalMalumot.innerHTML += `
        
           <div className="modaldiv">
                    <img src=${val.img} class="card-img-top" alt="...">
                        
                    <h5 class="card-title">name :${val.name}</h5>
                    <h6 class="card-title">narxi :${val.narx} $</h6>
                    <h2 class="card-title">soni :${val.count}</h2>
                    <button onclick="plussavatfun(${val.id})" class='btn btn-primary'>+</button>
                    <button  onclick="minussavatfun(${val.id})" class='btn btn-primary'>-</button>
                    <h1>summa : ${val.narx * val.count} $</h1>
      
           </div>
        `
    })
    resultsavatCount(savatdata)
}
modalforech()
function plussavatfun(id){
    data = data.map(val=>val.id===id?{...val,count:val.count +1}:val)
    modalforech()
    dataforech()
}
function minussavatfun(id){
    data = data.map(val=>val.id===id?{...val,count:val.count >1?val.count -1:val.count=1}:val)
    modalforech()
    dataforech()
}

function resultsavatCount(val){
    hisob = val.reduce((a,b)=>a+b.count*b.narx,0)
    savatCountTotal.innerHTML = hisob +'$'
}

savatbtn.addEventListener('click',()=>{
     if(modall.className !== 'modall active'){
        modall.classList.add('active')
     }else{
        modall.classList.remove('active')
     }
     modalforech()
})
close.addEventListener('click',()=>{
     modall.classList.remove('active')
})


















// let cards =document.querySelector('.cards')
// let count =document.querySelector('.count')
// let count2 =document.querySelector('.count2')
// let data = [
//     {id:1,img:'./images2.jfif',savat:false,like:false},
//     {id:2,img:'./images2.jfif',savat:false,like:false},
//     {id:3,img:'./images3.jfif',savat:false,like:false},
//     {id:4,img:'./images.jfif',savat:false,like:false}
// ]

// function datafun(){
//     data.forEach((val,i)=>{
//         cards.innerHTML += `
//         <div class="card" key=${val.id} >
//             <img src=${val.img} alt="">
//             <button class="likebtn" onclick='likefun(${i})'>like</button>
//             <button  onclick='savatfun(${i})'>savat</button>
//         </div>
//         `
//     })
// }
// datafun()

// let btns = document.querySelectorAll('.likebtn')


// function likefun(i){
//     data.map((val,x)=>{
//         if(i===x){
//             val.like = val.like ==false?true:false
            
//         }
//     })
  
//     result()
//     datafun()
// }
// function savatfun(i){
//     data.map((val,x)=>{
//         if(i===x){
//             val.savat = val.savat==false?true:false
//         }
//     })
//     result()
//     datafun()
// }

// function result (){
//     a = data.filter(val=>val.like ===true)
//     count.textContent = a.length

//     b = data.filter(val=>val.savat ===true)
//     count2.textContent = b.length
// }