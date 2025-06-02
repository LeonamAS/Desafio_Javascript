

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
        let item = carouselArr[sequencia];

        let carrossel = document.getElementById("carousel");
        let titulo = document.getElementById("carousel-title");

        let imagem = `<img src="img/${item.image}" style="height: 100%; display: flex; justify-self: center;">`;

        carrossel.innerHTML = imagem;
        titulo.innerHTML = `<a href="${item.url}" style="color: black">${item.title}</a>`;
        this._sequence++

        if (this._sequence == this._size) {
            Carousel._sequence = 0;
        }
    }
}
