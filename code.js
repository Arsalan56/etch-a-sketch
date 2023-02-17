const cont = document.querySelector('.cont');
for (let i = 0; i < 4; i++) {
    let container = document.createElement('div');
    container.classList.toggle('container');
    cont.appendChild(container);
    for (let i = 0; i < 4; i++) {
        let sketch = document.createElement('div');
        sketch.classList.toggle('sketch');
        container.appendChild(sketch);
    }
}


let sketch = document.querySelectorAll('.sketch');
sketch.forEach(box => box.addEventListener('mouseover', () => box.classList.add('active')));