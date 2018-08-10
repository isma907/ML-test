var auxArray = [1,6,1];
var intentos = 0;
function iterationsToEquality(arr) {
    intentos++
    console.log("intento: "+intentos +" resultado: "+ auxArray);

    var maximo = Math.max.apply(null, arr);
    var minimo = Math.min.apply(null, arr);
    for (i = 0; i < auxArray.length; i++) { 
        if (auxArray[i] != maximo){
            auxArray[i]++
        }
    }

    if(maximo == minimo){
        return arr;
    }
    if (maximo > minimo){
        console.log(intentos);
        iterationsToEquality(arr)
    }  
}

iterationsToEquality(auxArray);
console.log("resultado final:"+ auxArray);