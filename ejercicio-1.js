var largoArray = 50;

function generarArrayConMultiplos(arr) {
    var miArray = []
    for (var i = 1; i <= arr; i++) {
        if(i%3 == 0 && i%5 == 0){
            miArray.push("multiplo de 3 y 5")
        }
        else if(i%3 == 0){
            miArray.push("multiplo de 3")
        }
        else{
            miArray.push(i);
        }

    }
    return miArray;
}

generarArrayConMultiplos(largoArray);
