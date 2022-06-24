let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;


for(let i = 0; i < 5; i++){
    let valorinformadopelousuario = parseInt(gets());

    if(valorinformadopelousuario % 2 == 0 || valorinformadopelousuario == 0){
        valoresPares++;
    } else {
        valoresImpares++;
    }
    
    if (valorinformadopelousuario < 0) {
        valoresNegativos++;
    } else if (valorinformadopelousuario > 0) {
        valoresPositivos++;
    }
}

console.log(valoresPares + "  par(es)");
console.log(valoresImpares + " impar(es)");
console.log(valoresPositivos + " positivo(s)");
console.log(valoresNegativos + " negativo(s)");
