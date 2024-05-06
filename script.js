const central = document.getElementById("central");
const botoes = document.querySelectorAll(".botao");
let aberto = false;
let anguloInicial = 0; // Ângulo inicial para rotação

central.addEventListener("click", () => {
  if (!aberto) {
    botoes.forEach((botao, index) => {
      const angulo = anguloInicial + 60 * index; // Ângulo com rotação
      const raio = 200; // Aumenta a distancia dos botões
      const x = Math.cos(angulo * Math.PI / 180) * raio;
      const y = Math.sin(angulo * Math.PI / 180) * raio;

      botao.style.left = `calc(50% + ${x}px)`;
      botao.style.top = `calc(50% + ${y}px)`;
      botao.classList.add("ativo");
    });

    anguloInicial += 45; // Incrementa o ângulo para a próxima rotação
  } else {
    botoes.forEach(botao => {
      botao.classList.remove("ativo");
    });
  }

  aberto = !aberto;
});