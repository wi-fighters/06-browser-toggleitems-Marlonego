const button = document.getElementById('button');
const listContainer = document.querySelector('.list-group')
const message = document.querySelector('.alert-success');
message.style.display = 'none';

button.addEventListener('click', () => {

    listContainer.classList.toggle('hide');

    if (button.innerText === 'Hide destination') {
        button.innerText = 'Show destination'

    } else {
        button.innerText = 'Hide destination'
        message.style.display = 'block'

    }

})

const li = document.getElementsByClassName('list-group-item');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', (e) => {
        let active = document.querySelector('.active');
        active.classList.remove('active');
        e.target.classList.add('active')
        message.innerHTML = 'You are going to ' + e.target.innerHTML;
        message.style.display = 'block';
        console.log(e.target.innerHTML);

    })

}


const span = document.getElementById('span');

li.addEventListener('click', () => {
    span.innerText = 'lohnhnj'
})
