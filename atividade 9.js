function calcularTempoPouso(velocidadeInicial, desaceleracao, tempoMaximo, velocidadeSegura) {
    let tempo = 0;

    while (velocidadeInicial > velocidadeSegura && tempo < tempoMaximo) {
        velocidadeInicial -= desaceleracao;
        tempo++;
    }

    if (velocidadeInicial <= velocidadeSegura) {
        return `Pouso seguro em ${tempo} segundos.`;
    } else {
        return "Tempo máximo excedido. Risco de desvio orbital!";
    }
}

// Exemplo de uso:
console.log(calcularTempoPouso(500, 20, 30, 50));
