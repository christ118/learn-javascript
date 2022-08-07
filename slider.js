
function slidebyclick()
{
    if( typeof slidebyclick.currentslide == 'undefined' ) {
        slidebyclick.currentslide = 0;
        slidebyclick.e = false;
    
    }
    
    
    carousel = document.getElementsByClassName("carousel")[0];
    slides = carousel.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++)
    {
        if (i == slidebyclick.currentslide)
        {
            slides[i].className += " active"
            
        }
        else
        {
            slides[i].className = slides[i].className.replace("active", "");
            }
    }
    
    if (slidebyclick.e == false)
        {carousel.getElementsByClassName("next")[0].addEventListener("click",
    
        function (e) {
            e.stopPropagation();
            slidebyclick.currentslide += 1;
            if (slidebyclick.currentslide >= slides.length)
            {
                slidebyclick.currentslide = 0;
                console.log(slidebyclick.currentslide);
                }
            slidebyclick();
        }
    )
        
    carousel.getElementsByClassName("previous")[0].addEventListener("click",
    
    function (e) {
        e.stopPropagation();
        slidebyclick.currentslide -= 1;
        if (slidebyclick.currentslide < 0)
        {
            slidebyclick.currentslide = slides.length-1;
            console.log(slidebyclick.currentslide);
            }
        slidebyclick();
    }
)
        slidebyclick.e = true;
    }
    
}

slidebyclick();

