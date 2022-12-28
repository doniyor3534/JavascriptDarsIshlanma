let form = document.querySelector('#form')
let ism = document.querySelector('#ism')
let fam = document.querySelector('#fam')
let tbody = document.querySelector('tbody')
let data = JSON.parse(localStorage.getItem('data')) || []


function dataFunction(){
    data = JSON.parse(localStorage.getItem('data')) || []
}


let input = {
    id: '',
    ism: '',
    fam: ''
}
let edit = false


ism.addEventListener('change', (e) => {
    input.ism = e.target.value
    console.log(input);
})
fam.addEventListener('change', (e) => {
    input.fam = e.target.value
    console.log(input);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (edit) {
        data = data.map(val => val.id === input.id ? input : val)
        localStorage.setItem('data', JSON.stringify(data))
        dataFunction()
        edit = false
    } else {
        input.id = new Date().getTime()
        localStorage.setItem('data', JSON.stringify([...data, input]))
        dataFunction()
    }
    tablefun()
    ism.value = ''
    fam.value = ''
    input = {
        id: '',
        ism: '',
        fam: ''
    }
})


function tablefun() {
    tbody.innerHTML = ''
    data.forEach((val, i) => {
        tbody.innerHTML += `
        <tr>
            <td>${val.id}</td>
            <td>${val.ism}</td>
            <td>${val.fam}</td>
            <td><button  onclick="editfun(${i})" >edit</button></td>
            <td><button  onclick="delet(${i})" >delet</button></td>
        </tr>
    `
    })
}
tablefun()

function delet(i) {
    localStorage.setItem('data', JSON.stringify(data = data.filter((v) => v.id !== data[i].id)))
    dataFunction()
    tablefun()
}
function editfun(i) {
    ism.value = data[i].ism
    fam.value = data[i].fam
    input = {
        id: data[i].id,
        ism: data[i].ism,
        fam: data[i].fam
    }
    tablefun()
    edit = true
}




