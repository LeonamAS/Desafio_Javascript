

//carousel

//Array storage class
let carouselArr = [];
let time = 0;

//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }


    static Start(arr) {
        console.log(carouselArr);

        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        time++
        
        
        document.getElementById("carousel-title").innerHTML = carouselArr[0].title;
        console.log(time);
    }
}
