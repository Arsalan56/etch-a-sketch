const cont = document.querySelector('.cont');

function EraseBox() {
    let box = document.querySelector('.cont');
    let child = document.querySelectorAll('.cont > div');
    child.forEach(sketch => {box.removeChild(sketch)});

}
function FillBox(pixels) {
    for (let i = 0; i < pixels; i++) {
        let container = document.createElement('div');
        container.classList.toggle('container');
        cont.appendChild(container);
        for (let i = 0; i < pixels; i++) {
            let sketch = document.createElement('div');
            sketch.classList.toggle('sketch');
            container.appendChild(sketch);
        }
    }
    let sketch = document.querySelectorAll('.sketch');
    sketch.forEach(box => box.addEventListener('mouseover', () => box.classList.add('active')));
}
FillBox(16)


let change = document.querySelector('.change');
change.addEventListener('click', function() {
    let input = prompt('Change Grid (1-100):');
    if (input > 0 && input <= 100) {
        EraseBox();
        FillBox(input);
    }
})

let restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    let sketch = document.querySelectorAll('.active');
    sketch.forEach(act => act.classList.remove('active'));
})