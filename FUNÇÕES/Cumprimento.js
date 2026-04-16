function cumprimentar() {
  const nome = 'Wesley'; // variável local
  const cumprimento = 'Olá'; // variável local
  console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
}

// as variáveis não podem ser acessada de fora da função
cumprimentar();