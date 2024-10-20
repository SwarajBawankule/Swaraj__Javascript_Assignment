let all_btn = document.querySelector('.container').getElementsByTagName('button');

for (let i = 0; i < all_btn.length; i++) {
    all_btn[i].addEventListener('click', changeAllColors);
}

function changeAllColors(event) {
    let clickedColorClass = event.target.classList[1]; // Get the class (color) of the clicked button

    for (let i = 0; i < all_btn.length; i++) {
        all_btn[i].classList.remove('green', 'red', 'yellow'); // Remove all color classes
        all_btn[i].classList.add(clickedColorClass); // Add the clicked button's color class to all buttons
    }
}
