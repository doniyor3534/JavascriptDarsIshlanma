let data = []

function fatchApi() {
    fetch('https://jsonplaceholder.typicode.com/photos/300')
        .then(response => response.json())
        .then(val => data.push(val))
        .catch(err => console.log(err))
}
fatchApi()
let cards = document.querySelector('.cards')
let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    console.log(data);
    dataforech()
})

function dataforech(){
    cards.innerHTML = ''
    data.forEach((val) => {
        cards.innerHTML += `
        <div class="card  p-3" key=${val.id}>
            <h1 class="header">${val.title}</h1>
            <img src=${val.thumbnailUrl} alt='ddkkdd'/>
        </div>
    `
    })
}

// dataforech()