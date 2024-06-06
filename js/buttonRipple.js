"use strict";

//const buttons = document.querySelectorAll('a.ripple-button');
const buttons = document.querySelectorAll('.accordion');
//console.log(buttons.length);
buttons.forEach(btn => {
    btn.addEventListener('click', function(onClickData) {
        //find click position inside of button
        //horizontal coordinate relative to button
        //absolute x value from left of screen - how far element is from left of screen
        const rect = this.getBoundingClientRect();
        const xCoord = onClickData.clientX - rect.left;
        const yCoord = onClickData.clientY - rect.top;

        let ripples = document.createElement('span');
        //ripples.classList.add('button-ripple-span');
        ripples.classList.add('accordion-span');
        ripples.style.left = xCoord + 'px';
        ripples.style.top = yCoord + 'px';
        //make child of current button element
        //console.log(xCoord, yCoord);
        this.appendChild(ripples);

        //destroy ripple element after x milliseconds
        setTimeout(() =>{
            ripples.remove()
        },500);
    })
});