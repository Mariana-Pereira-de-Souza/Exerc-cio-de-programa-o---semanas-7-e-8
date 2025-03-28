function multiplicarMatrizesInvestimento(matrizA, matrizB) {
    let linhasA = matrizA.length;
    let colunasA = matrizA[0].length;
    let linhasB = matrizB.length;
    let colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        return "As matrizes não podem ser multiplicadas. Dimensões incompatíveis.";
    }

    let matrizResultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            matrizResultado[i][j] = soma;
        }
    }

    return matrizResultado;
}

// Exemplo de uso:
let investimentosAno1 = [
    [1000, 2000],
    [1500, 2500]
];

let investimentosAno2 = [
    [1200, 1800],
    [1300, 2700]
];

console.log(multiplicarMatrizesInvestimento(investimentosAno1, investimentosAno2));
