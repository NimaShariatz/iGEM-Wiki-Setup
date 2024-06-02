function menu(menuSection){
    
    if (article.scrollTop > 1) {
        menuSection.style.boxShadow = '0 4px 30px -7px rgba(0, 0, 0, 0.2)';
        menuSection.style.borderColor = "rgba(2,48,71,0.2)";
        menuSection.style.backgroundColor="#fcf6f0";


    } else {
        menuSection.style.boxShadow = 'none';
        menuSection.style.borderColor = "transparent";
        menuSection.style.backgroundColor="#fcf1e9";
        

    }
    
}



var article = document.querySelector('article');

var menuSection = document.getElementById('traditionalheader');




article.addEventListener('scroll', event =>{
    menu(menuSection)

});