let btns = document.querySelectorAll('.btn');
let count = document.querySelector('.count');
let amal = document.querySelector('.amal');
let history = document.querySelector('.history');

count.textContent = '';
amal.textContent = '';
history.innerHTML = 'history';
let A = '';
let B = '';

btns.forEach((a)=>{
     a.addEventListener('click',()=>{
        if(a.textContent / 2 >= 0){
           count.textContent += a.textContent
        }else if(a.textContent == 'ac'){
           amal.textContent = ''
           count.textContent = ''          
        
        }else if(a.textContent === '+'){
           amal.textContent = a.textContent
           A = count.textContent
           count.textContent = ''
           history.innerHTML += `<h6>${A}</h6>`
          
        }
        else if(a.textContent === '-'){
            amal.textContent = a.textContent
            A = count.textContent
            count.textContent = ''
         }
         else if(a.textContent === '*'){
            amal.textContent = a.textContent
            A = count.textContent
            count.textContent = ''
         }
         else if(a.textContent === '='){
            B = count.textContent
       
               switch (amal.textContent) {
                case '+':
                      return (
                        console.log(A),
                        count.innerHTML = Number(A) + Number(B),
                        history.innerHTML += `<h6>${amal.textContent}</h6>`,
                        history.innerHTML += `<h6>${B}</h6>`,
                         amal.textContent = ''
                      )
                    break;
                case '-':
                    return (
                        console.log(A),
                        count.innerHTML = Number(A) - Number(B),
                        history.innerHTML += `<h6>${amal.textContent}</h6>`,
                        history.innerHTML += `<h6>${B}</h6>`,
                         amal.textContent = ''
                      )
                    break;
                case '*':
                    return (
                        history.innerHTML += `<h6>${b}</h6>`,
                         count.textContent = Number(a) + Number(b)
                      )
                    break;
               
                default:
                    return 'jdjjdj'
                    break;
               }
         }
     })
})



