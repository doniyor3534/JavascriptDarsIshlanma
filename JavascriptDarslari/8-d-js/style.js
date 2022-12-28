let cards = document.querySelector('.cards')
for(i=0;i<10;i++){
    cards.innerHTML+= `<button class='btn' onclick={btnclick(${i})} >btn</button>`
}
let btn = document.querySelectorAll('.btn')
console.log(btn);
function btnclick(i){
    btn.forEach((e,d)=>{
        if(btn[d]=== btn[i]){
            e.classList.add('active')
        }else {
            e.classList.remove('active')
        }
    })
}