
let tbody = document.querySelector('tbody')
let ism = document.querySelector('.name')
let familya = document.querySelector('.familya')
let form = document.querySelector('form')
let data = JSON.parse(localStorage.getItem('DATA')) || []
// //modal
let modalka = document.querySelector('.modalka')
let closebtn = document.querySelector('.close')
let addbtn = document.querySelector('.addbtn')
addbtn.addEventListener('click',()=>{
    if(modalka.className !== 'modalka active'){
        modalka.classList.add('active')
    }else{
        modalka.classList.remove('active')
    }
})
closebtn.addEventListener('click',()=>{
    modalka.classList.remove('active')
})
/////modal
let input = {
    id:'',
    ism:'',
    familya:''
}

let edit = false

function dataClik(){
    data = JSON.parse(localStorage.getItem('DATA'))
}

function datapush(){
    localStorage.setItem('DATA',JSON.stringify([...data,input]))
    data = JSON.parse(localStorage.getItem('DATA'))
}

ism.addEventListener('keyup',(e)=>{
   input.ism = e.target.value
})
familya.addEventListener('keyup',(e)=>{
   input.familya = e.target.value
})

form.addEventListener('submit',(e)=>{
    console.log('dddddd');
    e.preventDefault()
   if(!edit){
    input.id = new Date().getTime()
    datapush()
   }else{
       data = data.map(val=>val.id === input.id ?input:val)
       localStorage.setItem('DATA',JSON.stringify(data))
       dataClik()
       edit = false
   }
    crudFunc()
    ism.value = ''
    familya.value = ''
    input = {
        id:'',
        ism:'',
        familya:''
    }
    modalka.classList.remove('active')
})


function crudFunc(){
    tbody.innerHTML =''
    data.map((val,i)=>{
        tbody.innerHTML += `<tr>
            <th>${i+1}</th>
            <td>${val.id}</td>
            <td>${val.ism}</td>
            <td>${val.familya}</td>
            <td>
                <button class="btn btn-warning" onclick="editfun(${i})">edit</button>
                <button  class="btn btn-danger" onclick="deletefun(${i})">delete</button>
            </td>
    </tr>`
    })
}
crudFunc()

function deletefun (i){
    data = data.filter(val=>val.id !== data[i].id)
    localStorage.setItem('DATA',JSON.stringify(data))
    console.log(data);
    dataClik()
    crudFunc()
}


function editfun(i){
    input = {
        id:data[i].id,
        ism:data[i].ism,
        familya:data[i].familya
    }
    ism.value = data[i].ism
    familya.value = data[i].familya
     edit  = true
     modalka.classList.add('active')
}