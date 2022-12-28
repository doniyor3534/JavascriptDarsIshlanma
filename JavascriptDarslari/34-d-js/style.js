
let btn =document.querySelectorAll('.btn')
let tabcard =document.querySelectorAll('.tabcard')

function tabfun(i){
    tabcard.forEach((val,i)=>{
        val.style.display = 'none'
    })
    tabcard[i].style.display = 'block'
}

function btnfun(){
    tabfun(0)
    btn.forEach((val,i)=>{
        val.addEventListener('click',()=>{
            tabfun(i)
            val.classList.add('active')
            btn.forEach((s,x)=>{
                if(x!==i){
                    s.classList.remove('active')
                }
            })
        })
    })
}
btnfun()








let data = [
    {id:1,name:'aaa',count:1,savat:false,narx:1000},
    {id:2,name:'bbb',count:1,savat:false,narx:2000},
    {id:3,name:'ddd',count:2,savat:false,narx:2500},
    {id:4,name:'ccc',count:1,savat:false,narx:900},
]

//  data = data.map(val => val.id===1?{...val,savat:true}:val)
//  data = data.map(val => val.id===2?{...val,count:val.count +1} :val)
// let result = data.filter(val => val.savat===true)
let result = data.reduce((a,b )=>a+(b.count*b.narx),0 )
console.log(result);



