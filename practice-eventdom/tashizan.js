function add(){
    let a = document.querySelector('input[name="left"]');
    let a2 = a.value; 
    let a3 = Number(a2);
    let b = document.querySelector('input[name="right"]');
    let b2 = b.value; 
    let b3 = Number(b2);
    let n = a3 + b3;
    let an = document.querySelector('span#answer')
    an.textContent = n 
}
let d = document.querySelector('button#calc');
d.addEventListener('click',add); 