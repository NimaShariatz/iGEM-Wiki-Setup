// var toggle = document.getElementById("toggle-mode")

// toggle.onclick = function(){
//     document.body.classList.toggle("dark-theme")
// }

var toggle = document.getElementById("toggle-mode");

toggle.onclick = function() {
    //SELECT ALL ELEMENTS
    const allElements = document.querySelectorAll('*');

    //add disable class
    allElements.forEach(element => {
        element.classList.add('no-transition');
    });

    document.body.classList.toggle("dark-theme");

    //Ensures browser processes changes immediately
    document.documentElement.offsetHeight;

    //remove class after delay (Short)
    setTimeout(() => {
        allElements.forEach(element => {
            element.classList.remove('no-transition');
        });
    }, 1);
};