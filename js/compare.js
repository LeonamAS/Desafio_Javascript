
//car
let carArr = [];
let item = 0;

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked == true) {
            carArr[item] = carClass;
            item++;
            if (item == 2) {
                item = 0;
            }
            console.log(carArr);
        } else {
            carArr.shift();
            console.log(carArr);
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    let imagem = `<img src="${carArr[item].image}" width="200">`;
    
    for (let item = 0; item < 2; item++) {
        document.getElementById(`compare_image_${item}`).innerHTML = imagem;
        document.getElementById(`compare_modelo_${item}`).innerHTML = carArr[item].nome;
        document.getElementById(`compare_alturacacamba_${item}`).innerHTML = carArr[item].alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${item}`).innerHTML = carArr[item].alturaVeiculo;
        document.getElementById(`compare_alturasolo_${item}`).innerHTML = carArr[item].alturaSolo;
        document.getElementById(`compare_capacidadecarga_${item}`).innerHTML = carArr[item].capacidadeCarga;
        document.getElementById(`compare_motor_${item}`).innerHTML = carArr[item].motor;
        document.getElementById(`compare_potencia_${item}`).innerHTML = carArr[item].potencia;
        document.getElementById(`compare_volumecacamba_${item}`).innerHTML = carArr[item].volumeCacamba;
        document.getElementById(`compare_roda_${item}`).innerHTML = carArr[item].roda;
        document.getElementById(`compare_preco_${item}`).innerHTML = "R$ " + carArr[item].preco;
    }
}
