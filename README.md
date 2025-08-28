# 📝 Sistema de Cadastro de Usuários

Projeto acadêmico feito em **HTML, CSS e JavaScript** para demonstrar **validação de formulários** e cálculo automático do **Imposto de Renda (IR)**.

## ⚡ Recursos

- Checagem de dados com **expressões regulares** e **condições JS**.  
- Campos obrigatórios: Nome, CPF, Login, Email, Senha, Confirmação, Salário, Dependentes.  
- Botão para **exibir/ocultar senha**.  
- Cálculo do IR feito automaticamente ao sair do campo dependentes.  
- Mensagens de erro e destaque em campos inválidos.  
- Ações:
  - **Cadastrar** → valida, mostra alerta de sucesso e limpa o formulário.  
  - **Limpar** → reinicia os campos e remove classes de validação.  

## 📊 Fórmula do IR

Base = Salário - (200 × Dependentes)  
Se Base < 0 → Base = 0  

Alíquotas:  
- 0% até 2000  
- 10% até 3000  
- 15% até 4500  
- 22% acima de 4500  

Exemplo:  
Salário = 3500 | Dependentes = 2  
Base = 3100  
Taxa = 15%  
IR = 465,00  

## 📂 Estrutura de Pastas

```
📦 cadastro_usuario_v2
 ┣ 📜 index.html
 ┣ 📜 styles.css
 ┣ 📜 script.js
 ┗ 📜 README.md
```

## ▶️ Como rodar

1. Abra o `index.html` em qualquer navegador.  
2. Preencha os campos.  
3. Clique em **Cadastrar** para validar e salvar.  

## 🛠 Tecnologias

- HTML5  
- CSS3  
- JavaScript ES6  

## 🎯 Nota

Este sistema é **educacional** e foi criado como exercício da disciplina *Programação para Internet*.
