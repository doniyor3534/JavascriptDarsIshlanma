let form = document.querySelector('#form')
let ism = document.querySelector('#ism')
let fam = document.querySelector('#fam')
let tbody = document.querySelector('tbody')
let data = [{id:'1',ism:'fv',fam:'vdvd'}]
let input = {
    id:'',
    ism:'',
    fam:''
}



ism.addEventListener('change',(e) => {
    input.ism = e.target.value
    console.log(input);
})
fam.addEventListener('change',(e) => {
    input.fam = e.target.value
    console.log(input);
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    input.id = new Date().getTime()
    data.push(input)
    tablefun()
    console.log(data);
    input = {
        id:'',
        ism:'',
        fam:''
    }
})


function tablefun(){
    tbody.innerHTML =''
    data.forEach((val,i)=>{
        tbody.innerHTML += `
        <tr>
            <td>${val.id}</td>
            <td>${val.ism}</td>
            <td>${val.fam}</td>
            <td><button  onclick="delet(${i})" >delet</button></td>
        </tr>
    `
    })
}
tablefun()

function delet(val){
     data = data.filter((v)=>v.id !== data[val].id)
     tablefun()
}