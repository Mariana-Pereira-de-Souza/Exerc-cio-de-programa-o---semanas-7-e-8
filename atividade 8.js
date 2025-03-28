// Classe base Veiculo
class Veiculo {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
    
    CalcularConsumo(kmPercorrido) {
        throw new Error("Este método deve ser sobrescrito nas subclasses.");
    }
}

// Classe Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano);
        this.eficiencia = eficiencia; // km/L
    }
    
    CalcularConsumo(kmPercorrido) {
        if (this.eficiencia > 0) {
            return kmPercorrido / this.eficiencia;
        } else {
            throw new Error("Eficiência inválida!");
        }
    }
}

// Classe Moto que herda de Veiculo
class Moto extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano);
        this.eficiencia = eficiencia; // km/L
    }
    
    CalcularConsumo(kmPercorrido) {
        if (this.eficiencia > 0) {
            return kmPercorrido / this.eficiencia;
        } else {
            throw new Error("Eficiência inválida!");
        }
    }
}

// Teste
const carro1 = new Carro("Sedan", 2022, 12);
const moto1 = new Moto("Esportiva", 2021, 25);

console.log(`Consumo do carro para 240 km: ${carro1.CalcularConsumo(240)} litros`);
console.log(`Consumo da moto para 240 km: ${moto1.CalcularConsumo(240)} litros`);
