function menu(menuSection){
    
    if (article.scrollTop > 1) {

        menuSection.style.borderColor = "var(--headermenu-border)";


    } else {
        menuSection.style.borderColor = "transparent";
        

    }
    
}



var article = document.querySelector('article');

var menuSection = document.getElementById('traditionalheader');




article.addEventListener('scroll', event =>{
    menu(menuSection)

});