


function ImageFinder(image, figcaption) {
    
    if(image!=null || figcaption!=null){
        
        var position = image.getBoundingClientRect();
        var screen_location = (position.top - (window.innerHeight/2) - 85);
        //console.log(screen_location);


        if (screen_location < 0){
        
            image.style.borderColor="var(--accordion-hover-colour)";
            image.style.backgroundColor="var(--progressTracker-colour)";
            image.style.borderRadius="3px 3px 0 0";

            figcaption.style.backgroundColor="var(--progressTracker-colour)";
            figcaption.style.borderRadius="0 0 3px 3px";
        
        }else{


            image.style.borderColor="transparent";
            image.style.backgroundColor="transparent";



            figcaption.style.backgroundColor="transparent";



        }



    }


}












var article = document.querySelector('article');

//Image related
var Images_paragraph = [document.getElementById("imgPara1"),document.getElementById("imgPara2"),document.getElementById("imgPara3"),document.getElementById("imgPara4")
    ,document.getElementById("imgPara5"),document.getElementById("imgPara6"),document.getElementById("imgPara7"),document.getElementById("imgPara8"),
    document.getElementById("imgPara9"), document.getElementById("imgPara10")
]
//Image related
var Images_figcaption = [document.getElementById("figCap1"), document.getElementById("figCap2"), document.getElementById("figCap3"), document.getElementById("figCap4"),
document.getElementById("figCap5"),document.getElementById("figCap6"),document.getElementById("figCap7"),document.getElementById("figCap8"),
document.getElementById("figCap9"), document.getElementById("figCap10")
]

article.addEventListener('scroll', event =>{
    ImageFinder(Images_paragraph[0], Images_figcaption[0]);
    ImageFinder(Images_paragraph[1], Images_figcaption[1]);
    ImageFinder(Images_paragraph[2], Images_figcaption[2]);
    ImageFinder(Images_paragraph[3], Images_figcaption[3]);
    ImageFinder(Images_paragraph[4], Images_figcaption[4]);
    ImageFinder(Images_paragraph[5], Images_figcaption[5]);
    ImageFinder(Images_paragraph[6], Images_figcaption[6]);
    ImageFinder(Images_paragraph[7], Images_figcaption[7]);
    ImageFinder(Images_paragraph[8], Images_figcaption[8]);





});



/* if(image!=null || figcaption!=null){
    image.style.borderColor="var(--accordion-hover-colour)";
    image.style.backgroundColor="var(--progressTracker-colour)";
    image.style.borderRadius="3px 3px 0 0";
} */