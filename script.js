const form = document.getElementById("formCadastro");

const inputs = {
  nome: document.getElementById("nome"),
  cpf: document.getElementById("cpf"),
  login: document.getElementById("login"),
  email: document.getElementById("email"),
  senha: document.getElementById("senha"),
  confirmaSenha: document.getElementById("confirmaSenha"),
  salario: document.getElementById("salario"),
  dependentes: document.getElementById("dependentes"),
  ir: document.getElementById("ir")
};

const padroes = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  login: /^[A-Za-z0-9._-]{4,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  senha: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
};

function checarCampo(campo, condicao, mensagem) {
  const aviso = campo.parentElement.querySelector(".erro");
  if (!condicao) {
    campo.classList.add("invalido");
    campo.classList.remove("valido");
    aviso.textContent = mensagem;
    return false;
  } else {
    campo.classList.add("valido");
    campo.classList.remove("invalido");
    aviso.textContent = "";
    return true;
  }
}

function validarTudo() {
  let ok = true;

  if (!checarCampo(inputs.nome, inputs.nome.value.trim().length >= 3, "Digite pelo menos 3 letras")) ok = false;
  if (!checarCampo(inputs.cpf, padroes.cpf.test(inputs.cpf.value), "CPF inválido")) ok = false;
  if (!checarCampo(inputs.login, padroes.login.test(inputs.login.value), "Login inválido")) ok = false;
  if (!checarCampo(inputs.email, padroes.email.test(inputs.email.value), "E-mail inválido")) ok = false;
  if (!checarCampo(inputs.senha, padroes.senha.test(inputs.senha.value), "Senha fraca")) ok = false;
  if (!checarCampo(inputs.confirmaSenha, inputs.confirmaSenha.value === inputs.senha.value, "As senhas não coincidem")) ok = false;
  if (!checarCampo(inputs.salario, parseFloat(inputs.salario.value) > 0, "Informe um salário > 0")) ok = false;
  if (!checarCampo(inputs.dependentes, parseInt(inputs.dependentes.value) >= 0, "Dependentes >= 0")) ok = false;

  return ok;
}

inputs.dependentes.addEventListener("blur", () => {
  let sal = parseFloat(inputs.salario.value) || 0;
  let dep = parseInt(inputs.dependentes.value) || 0;
  let base = sal - (dep * 200);
  if (base < 0) base = 0;

  let taxa = 0;
  if (base <= 2000) taxa = 0;
  else if (base <= 3000) taxa = 0.1;
  else if (base <= 4500) taxa = 0.15;
  else taxa = 0.22;

  let irFinal = (base * taxa).toFixed(2);
  inputs.ir.value = irFinal.replace(".", ",");
});

document.querySelectorAll(".mostrarSenha").forEach(botao => {
  botao.addEventListener("click", () => {
    const campo = botao.previousElementSibling;
    campo.type = campo.type === "password" ? "text" : "password";
  });
});

form.addEventListener("submit", ev => {
  ev.preventDefault();
  if (validarTudo()) {
    alert("Cadastro concluído!");
    form.reset();
    Object.values(inputs).forEach(el => {
      el.classList.remove("valido", "invalido");
    });
    inputs.ir.value = "0,00";
  }
});

document.getElementById("btnReset").addEventListener("click", () => {
  Object.values(inputs).forEach(el => {
    el.classList.remove("valido", "invalido");
  });
  inputs.ir.value = "0,00";
});