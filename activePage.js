"use strict";
const activePage = window.location.pathname;
//console.log("This is active page:"+activePage);

const navLinks = document.querySelectorAll('.mega-menu-container a').
forEach(link => {
    //console.log(link.href);
    if(link.href.includes(activePage)){
        //console.log(activePage);
        link.classList.add('active-link'); //add this class to whatever link has the same URL as we are in
    }
})