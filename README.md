📝 Sistema de Registro de Usuários

Este projeto acadêmico, desenvolvido com HTML, CSS e JavaScript, tem como objetivo demonstrar a validação de formulários e o cálculo automático do Imposto de Renda (IR).

⚡ Funcionalidades

Validação de campos utilizando expressões regulares e estruturas condicionais em JavaScript.

Campos obrigatórios: Nome, CPF, Login, E-mail, Senha, Confirmação de Senha, Salário e Número de Dependentes.

Função para mostrar/ocultar a senha.

Cálculo automático do IR ao sair do campo de dependentes.

Exibição de mensagens de erro e realce de campos inválidos.

Ações disponíveis:

Cadastrar → verifica os dados, exibe mensagem de sucesso e limpa o formulário.

Limpar → redefine todos os campos e remove os estilos de validação.

📊 Cálculo do Imposto de Renda

Fórmula:
Base = Salário - (200 × número de dependentes)
Se a base for menor que 0, ela é ajustada para 0.

Tabela de alíquotas:

Até 2000 → isento

De 2001 a 3000 → 10%

De 3001 a 4500 → 15%

Acima de 4500 → 22%

Exemplo:
Salário: R$ 3.500 | Dependentes: 2
Base = 3.100 → Alíquota: 15%
IR = R$ 465,00

📁 Organização do Projeto
📦 cadastro_usuario_v2
 ┣ 📜 index.html
 ┣ 📜 styles.css
 ┣ 📜 script.js
 ┗ 📜 README.md

▶️ Como executar

Abra o arquivo index.html em seu navegador.

Preencha todos os campos do formulário.

Clique em Cadastrar para validar os dados e registrar as informações.

🛠 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6)

🎯 Observação

Este projeto foi desenvolvido com fins educacionais, como parte das atividades da disciplina Programação para Internet.
