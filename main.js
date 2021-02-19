const Input = document.querySelector('input');
const Btn = document.querySelector('button');
const list = document.querySelector(".todolist");

const Run = (e) =>{
    e.preventDefault();
    let text= document.createElement('p');
    text.innerText = Input.value;
    text.classList.add('text');
    list.appendChild(text);
    Input.value = '';

    text.addEventListener('click', () =>{
        text.style.textDecoration = "line-through";
        text.style.color = 'red';
    });
    text.addEventListener('dblclick', () =>{
        list.removeChild(text);
    });
};


Btn.addEventListener('click', Run);



