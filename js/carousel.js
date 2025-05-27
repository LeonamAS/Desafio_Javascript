

//carousel

//Array storage class
let carouselArr = [];
console.log(carouselArr.length);

document.getElementById("carousel").style.backgroundColor = "red";
document.getElementById("carousel-title").innerHTML = "SEND HELP!!!!";

//class Carousel
class Carousel {

    constructor (image, title, url) {
        this._image = image;
        this._title = title;
        this._url = url;
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
        //Needs something here
    }
}

console.log(carouselArr.length);
