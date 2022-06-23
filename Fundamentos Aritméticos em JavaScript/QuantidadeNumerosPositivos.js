// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let cont = 0;

for (let i = 0; i < 6; i++){
    let numero = parseFloat(gets());
    if (numero > 0) {
        cont++;
    }
}

console.log(cont + " valores positivos");
