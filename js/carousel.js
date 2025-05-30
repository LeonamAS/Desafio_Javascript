

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
        let sequencia = Carousel._sequence;
        let carrossel = document.getElementById("carousel");
        let imagem = document.getElementById("imagem");
        let titulo = document.getElementById("carousel-title");
        // let link = document.getElementById("link");

        // Div Carrosel
        carrossel.style.height = "70%";
        carrossel.style.display = "flex";
        carrossel.style.justifyContent = "center";

        // Imagem do carrossel
        imagem.style.width = "70%";

        imagem.src = carouselArr[sequencia].image;
        titulo.innerHTML = carouselArr[sequencia].title;
        // link.href = carouselArr[sequencia].url;
        this._sequence++

        if (this._sequence == this._size) {
            Carousel._sequence = 0;
        }
    }
}
