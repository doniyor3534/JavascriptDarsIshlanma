let input = document.querySelectorAll(".input");
let btn = document.querySelector(".btn");

let s = {
  son1:'',
  son2:''
};
input.forEach((val)=>{
    val.addEventListener('input',(e)=>{
        s={...s,[e.target.name]:e.target.value}
    })
     
})

btn.addEventListener('click',()=>{
    console.log(s.son1 * s.son2)
})


