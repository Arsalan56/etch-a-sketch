const cont = document.querySelector('.cont');
function fillBox(pixels) {
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
}
fillBox(16)

let sketch = document.querySelectorAll('.sketch');
sketch.forEach(box => box.addEventListener('mouseover', () => box.classList.add('active')));