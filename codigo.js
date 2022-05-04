// elementos de fecha
const dayN = document.querySelector('.div_fecha_l_dayN');
const month = document.querySelector('.div_fecha_l_month');
const yearN = document.querySelector('.div_fecha_l_year');
const dayS = document.querySelector('.div_fecha_r');
const agregar = document.querySelector('.div_agregar');
const tareas = document.querySelector('.div_tareas');
const task = document.querySelector('.div_input');
const btn_ordenar = document.querySelector('.div_ordenar');
const divs = Array.from(document.querySelectorAll('.div_ta'));


//Obtencion de la fehca

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString('es-mx', options);
const dateArray = date.split(" ");
let diaS = dateArray[0].substring(0, dateArray[0].length - 1);
let diaN = dateArray[1];
let mes = dateArray[3];
let year = dateArray[5];
var t = 0;

dayN.innerHTML = diaN;
month.innerHTML = mes;
yearN.innerHTML = year;
dayS.innerHTML = diaS;

agregar.addEventListener('click', ()=>{
    newTask();
});

const newTask = ()=>{
    if(task.value == ""){

        
    }else{
        tareas.innerHTML += `
            <div class="div_ta ${t}">
                <p class="div_t ">${task.value}</p>
                <button class="btn_delete">X</button>
            </div>
    `;
    task.value = "";
    task.focus();
    t++;

    }
}
 
tareas.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'div_t'){
        if(e.target.classList.contains('listo')){
            e.target.classList.remove('listo');
           
        }else{
            e.target.classList.add('listo');
        }

    }else if(e.target.classList[0] == 'btn_delete'){ 
        
       

        if(e.target.previousElementSibling.classList.contains('listo')){
            tareas.removeChild(e.target.parentNode);
        }else{
            e.target.previousElementSibling.classList.add('listo');
        }
    
        
    }else if(e.target.classList[0] == 'div_tareas'){
        
    }
});

btn_ordenar.addEventListener('click', ()=>{

    
    
    order().forEach(el => {

        tareas.innerHTML += `
            <div class="div_ta">
                <p class="${el.classList}">${el.innerHTML}</p>
                <button class="btn_delete">X</button>
            </div>
    `;
        
    })
})

const order = () =>{
    const done =[];
    const toDo =[];
   

 for (let i =0; i< tareas.children.length; i++){
        
        
        if (tareas.children[i].children[0].classList.contains('listo')){
            done.push(tareas.children[i].children[0]);
        }else{
            toDo.push(tareas.children[i].children[0]);
        }
       
    } 
   
    tareas.innerHTML = '';
    return [...toDo, ...done];
}



document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    if(keyValue == 'Enter'){
        
        newTask();

    }
  });









