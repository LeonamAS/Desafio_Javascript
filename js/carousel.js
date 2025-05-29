

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }


    static Start(arr) {

        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        // Div Carrosel
        document.getElementById("carousel").style.height = "300px";
        document.getElementById("carousel").style.display = "flex";
        document.getElementById("carousel").style.justifyContent = "center";

        // Imagem do carrossel
        document.getElementById("imagem").style.width = "600px";
        document.getElementById("imagem").style.padding = "20px";
        document.getElementById("imagem").style.alignItems = "center";

        // Troca das imagens
        if (Carousel._sequence == 0) {
            this._sequence++
            document.getElementById("imagem").src = carouselArr[0].image;
            document.getElementById("carousel-title").innerHTML = carouselArr[0].title;
            document.getElementById("link").href = carouselArr[0].url;
        }
        else if (Carousel._sequence == 1) {
            this._sequence++
            document.getElementById("imagem").src = carouselArr[1].image;
            document.getElementById("carousel-title").innerHTML = carouselArr[1].title;
            document.getElementById("link").href = carouselArr[1].url;
        }
        else {
            Carousel._sequence = 0;
            document.getElementById("imagem").src = carouselArr[2].image;
            document.getElementById("carousel-title").innerHTML = carouselArr[2].title;
            document.getElementById("link").href = carouselArr[2].url;
        }
    }
}
