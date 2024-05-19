

var header_menu = [document.getElementById("TEXT-project_menu"), document.getElementById("TEXT-wet_labmenu"), 
document.getElementById("TEXT-dry_lab_menu"), document.getElementById("TEXT-wet_human_practices_menu"), document.getElementById("TEXT-Team_menu")];

var original_text = ["A general overview of the project" , "Overview of the wet lab section", "Overview of the dry lab section",
"Overview of the human practices", "Overview of the team"];

var changed_text = ["Abstract, History of Agriculture, Significance of Agriculture in..."];


function mouseOver(header_menu, changed_text) {

    header_menu.style.transition = "all 1s";
    header_menu.innerHTML = changed_text;
    header_menu.style.opacity = "1";

  }
  
  function mouseOut(header_menu, original_text) {
      header_menu.style.transition = "all 1s";
      header_menu.innerHTML = original_text;
      header_menu.style.opacity = "0.6";
  
  }
  




document.getElementById("P1").addEventListener("mouseover",function() {
    mouseOver(header_menu[0], changed_text[0]);
});

  document.getElementById("P1").addEventListener("mouseout",function() {
    mouseOut(header_menu[0], original_text[0]);
});


document.getElementById("P2").addEventListener("mouseover",function() {
    mouseOver(header_menu[0], changed_text[0]);
});

  document.getElementById("P2").addEventListener("mouseout",function() {
    mouseOut(header_menu[0], original_text[0]);
});


document.getElementById("P3").addEventListener("mouseover",function() {
    mouseOver(header_menu[0], changed_text[0]);
});

  document.getElementById("P3").addEventListener("mouseout",function() {
    mouseOut(header_menu[0], original_text[0]);
});


document.getElementById("P4").addEventListener("mouseover",function() {
    mouseOver(header_menu[0], changed_text[0]);
});

  document.getElementById("P4").addEventListener("mouseout",function() {
    mouseOut(header_menu[0], original_text[0]);
});





document.getElementById("WL1").addEventListener("mouseover",function() {
    mouseOver(header_menu[1], changed_text[0]);
});

  document.getElementById("WL1").addEventListener("mouseout",function() {
    mouseOut(header_menu[1], original_text[1]);
});

document.getElementById("WL2").addEventListener("mouseover",function() {
    mouseOver(header_menu[1], changed_text[0]);
});

  document.getElementById("WL2").addEventListener("mouseout",function() {
    mouseOut(header_menu[1], original_text[1]);
});

document.getElementById("WL3").addEventListener("mouseover",function() {
    mouseOver(header_menu[1], changed_text[0]);
});

  document.getElementById("WL3").addEventListener("mouseout",function() {
    mouseOut(header_menu[1], original_text[1]);
});

document.getElementById("WL4").addEventListener("mouseover",function() {
    mouseOver(header_menu[1], changed_text[0]);
});

  document.getElementById("WL4").addEventListener("mouseout",function() {
    mouseOut(header_menu[1], original_text[1]);
});






document.getElementById("DL1").addEventListener("mouseover",function() {
    mouseOver(header_menu[2], changed_text[0]);
});

  document.getElementById("DL1").addEventListener("mouseout",function() {
    mouseOut(header_menu[2], original_text[2]);
});

document.getElementById("DL2").addEventListener("mouseover",function() {
    mouseOver(header_menu[2], changed_text[0]);
});

  document.getElementById("DL2").addEventListener("mouseout",function() {
    mouseOut(header_menu[2], original_text[2]);
});





document.getElementById("HP1").addEventListener("mouseover",function() {
    mouseOver(header_menu[3], changed_text[0]);
});

  document.getElementById("HP1").addEventListener("mouseout",function() {
    mouseOut(header_menu[3], original_text[3]);
});

document.getElementById("HP2").addEventListener("mouseover",function() {
    mouseOver(header_menu[3], changed_text[0]);
});

  document.getElementById("HP2").addEventListener("mouseout",function() {
    mouseOut(header_menu[3], original_text[3]);
});

document.getElementById("HP3").addEventListener("mouseover",function() {
    mouseOver(header_menu[3], changed_text[0]);
});

  document.getElementById("HP3").addEventListener("mouseout",function() {
    mouseOut(header_menu[3], original_text[3]);
});

document.getElementById("HP4").addEventListener("mouseover",function() {
    mouseOver(header_menu[3], changed_text[0]);
});

  document.getElementById("HP4").addEventListener("mouseout",function() {
    mouseOut(header_menu[3], original_text[3]);
});

document.getElementById("HP5").addEventListener("mouseover",function() {
    mouseOver(header_menu[3], changed_text[0]);
});

  document.getElementById("HP5").addEventListener("mouseout",function() {
    mouseOut(header_menu[3], original_text[3]);
});




document.getElementById("T1").addEventListener("mouseover",function() {
    mouseOver(header_menu[4], changed_text[0]);
});

  document.getElementById("T1").addEventListener("mouseout",function() {
    mouseOut(header_menu[4], original_text[4]);
});

document.getElementById("T2").addEventListener("mouseover",function() {
    mouseOver(header_menu[4], changed_text[0]);
});

  document.getElementById("T2").addEventListener("mouseout",function() {
    mouseOut(header_menu[4], original_text[4]);
});