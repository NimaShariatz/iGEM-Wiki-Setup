let background = document.getElementById('parallax-background');
let text = document.getElementById('parallax-text');
let midground = document.getElementById('parallax-midground');
let foreground = document.getElementById('parallax-foreground');
let object = document .getElementById('parallax-object');

let logo = document.getElementById('logo');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    object.style.left = -value * 0.4 + 'px';
    foreground.style.top = -value  * 0.5 + 'px';
    midground.style.top = -value * 0.3 + 'px';


    logo.style.top = -value * 0.4 + 'px';
})