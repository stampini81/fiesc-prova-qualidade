# Projeto de Avaliação FIESC - Analista de Qualidade JR

## 📝 Descrição

Este projeto consiste em um sistema web completo para gerenciamento de tarefas (To-Do List). A aplicação foi desenvolvida como parte do processo seletivo para a vaga de Analista de Qualidade JR na FIESC.

O foco principal foi não apenas na funcionalidade de um sistema CRUD (Create, Read, Update, Delete), mas na **garantia de qualidade** através de testes automatizados de ponta-a-ponta (E2E), simulando a interação do usuário e validando os fluxos da aplicação.

## ✨ Funcionalidades

  - **Criar** novas tarefas.
  - **Visualizar** todas as tarefas pendentes e concluídas.
  - **Marcar** tarefas como concluídas (e desmarcar).
  - **Excluir** tarefas.

## 💻 Tecnologias Utilizadas

  - **Backend:** Node.js com Express.js
  - **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
  - **Banco de Dados:** PostgreSQL (orquestrado com Docker)
  - **Testes E2E:** Cypress

## 📂 Estrutura do Projeto

```
fiesc-prova-qualidade/
├── cypress/                # Pasta de testes E2E
│   └── e2e/
│       └── tarefas.cy.js   # Arquivo com os casos de teste
├── public/                 # Arquivos do frontend
│   └── index.html
├── .gitignore              # Arquivos e pastas ignorados pelo Git
├── cypress.config.js       # Configuração do Cypress
├── package.json            # Dependências e scripts do projeto
└── server.js               # Código do servidor backend (API)
```

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

  - [Node.js](https://nodejs.org/en/) (v16 ou superior)
  - [npm](https://www.npmjs.com/) (v8 ou superior)
  - [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🚀 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/SEU_USUARIO_GITHUB/fiesc-prova-qualidade.git
    ```

2.  **Navegue para a pasta do projeto:**

    ```bash
    cd fiesc-prova-qualidade
    ```

3.  **Instale as dependências do Node.js:**

    ```bash
    npm install
    ```

4.  **Inicie o contêiner do banco de dados PostgreSQL com Docker:**
    *(Se o contêiner já existir, use `docker start fiesc-db`)*

    ```bash
    docker run --name fiesc-db -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=user -e POSTGRES_DB=fiesc_db -p 5432:5432 -d postgres
    ```

5.  **Crie a tabela de tarefas (execução única):**
    Conecte-se ao banco de dados utilizando uma ferramenta como DBeaver ou Beekeeper Studio e execute o seguinte script SQL:

    ```sql
    CREATE TABLE tarefas (
        id SERIAL PRIMARY KEY,
        descricao VARCHAR(255) NOT NULL,
        concluida BOOLEAN DEFAULT FALSE
    );
    ```

6.  **Inicie o servidor backend:**

    ```bash
    node server.js
    ```

    O servidor estará rodando em `http://localhost:3000`.

7.  **Acesse a aplicação:**
    Abra seu navegador e acesse a URL:
    [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

## ✅ Como Rodar os Testes

Para garantir que a aplicação funciona como o esperado, execute a suíte de testes automatizados com Cypress.

1.  **Certifique-se de que o backend e o banco de dados estejam rodando** (passos 4 e 6 acima).

2.  **Abra o Cypress:**
    Em um novo terminal, na raiz do projeto, execute:

    ```bash
    npx cypress open
    ```

3.  **Execute os testes:**
    Na janela do Cypress que se abrir, escolha um navegador e clique no arquivo de teste `tarefas.cy.js` para iniciar a execução.



## 👨‍💻 Autor

Desenvolvido por **Leandro da Silva Stampini**.

[](https://www.google.com/search?q=https://www.linkedin.com/in/https://www.linkedin.com/in/leandro-da-silva-stampini-07b04aa3/)
[](https://www.google.com/search?q=https://github.com/https://github.com/stampini81)
