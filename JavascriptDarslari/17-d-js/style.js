let form = document.querySelector('#form')
let ism = document.querySelector('#ism')
let fam = document.querySelector('#fam')
let tbody = document.querySelector('tbody')
let data = [{ id: '1', ism: 'fv', fam: 'vdvd' }]
let input = {
    id: '',
    ism: '',
    fam: ''
}
let edit = false


ism.addEventListener('keyup', (e) => {
    input.ism = e.target.value
    console.log(input);
})
fam.addEventListener('keyup', (e) => {
    input.fam = e.target.value
    console.log(input);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (edit) {
        data = data.map(val=>val.id===input.id?input:val)
        edit = false
    }else{
        input.id = new Date().getTime()
        data.push(input)
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
    data = data.filter((v) => v.id !== data[i].id)
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




