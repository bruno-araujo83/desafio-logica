function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return { saldoVitorias, nivel };
}

while (true) {
    const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
    const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

    if (!isNaN(vitorias) && !isNaN(derrotas)) {
        const { saldoVitorias, nivel } = calcularNivel(vitorias, derrotas);
        alert(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}.`);

        // Pergunta se o usuário deseja continuar
        const continuar = prompt("Deseja calcular novamente? (s/n):").toLowerCase();
        if (continuar !== 's') {
            break;
        }
    } else {
        alert("Por favor, insira números válidos.");
    }
}
