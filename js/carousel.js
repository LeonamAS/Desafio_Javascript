

//carousel

//Array storage class
let carouselArr = [];

// document.getElementById("carousel").style.backgroundColor = "red";
document.getElementById("carousel").style.backgroundImage = "url('img/XL Cabine.jpg')";
document.getElementById("carousel-title").style.fontSize = "xx-large";
document.getElementById("carousel-title").style.fontFamily = "Verdana";
document.getElementById("carousel-title").innerHTML = "Send help!!!";


//class Carousel
class Carousel {
    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }
    
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        
    }
}
