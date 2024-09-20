
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');

let items = container.querySelectorAll('.list .item');

let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let list = container.querySelector('.list');



let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function Slider() {

    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? 0 : active - 1
    Slider();
    items[active].classList.add('active');
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    Slider()
    items[active].classList.add('active');
}

