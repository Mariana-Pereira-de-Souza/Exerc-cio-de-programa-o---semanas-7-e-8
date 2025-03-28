const valorpedido = 199.99;

if (valorpedido < 50) {
    console.log("Frete não disponível!");
} else if (valorpedido >= 50 && valorpedido <= 199.99) {
    console.log("Frete com custo adicional!");
} else { 
    console.log("Frete grátis!");
}
