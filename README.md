# API de Cadastro de Usuários (MVC)

## 📚 Descrição

Este projeto é uma aplicação simples que integra **Front-end (HTML +
JavaScript)** com um **Back-end em Node.js utilizando Express**.

O sistema permite:

-   Cadastrar usuários
-   Listar usuários cadastrados

A aplicação foi desenvolvida seguindo o padrão de arquitetura **MVC
(Model--View--Controller)**, separando responsabilidades entre dados,
lógica e interface.

------------------------------------------------------------------------

## 🏗 Arquitetura do Projeto

O projeto segue a arquitetura **MVC**, que divide o sistema em três
camadas principais:

  Camada       Responsabilidade
  ------------ ---------------------------------
  Model        Gerencia os dados da aplicação
  View         Interface com o usuário
  Controller   Lógica de controle da aplicação

------------------------------------------------------------------------

## 📂 Estrutura de Pastas

    meu-projeto/
    │
    ├── public/
    │   ├── index.html
    │   └── script.js
    │
    ├── src/
    │   ├── controllers/
    │   │   └── userController.js
    │   │
    │   └── data/
    │       └── data.js
    │
    ├── server.js
    ├── package.json
    ├── .gitignore
    └── node_modules/

------------------------------------------------------------------------

## ⚙️ Tecnologias Utilizadas

-   Node.js
-   Express
-   Cors
-   HTML
-   JavaScript (Fetch API)

------------------------------------------------------------------------

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório

    git clone https://github.com/seu-usuario/seu-repositorio.git

### 2️⃣ Entrar na pasta do projeto

    cd seu-repositorio

### 3️⃣ Instalar as dependências

    npm install

### 4️⃣ Executar o servidor

    npm start

O servidor será iniciado em:

    http://localhost:3000

------------------------------------------------------------------------

## 🌐 Rotas da API

  Método   Rota             Descrição
  -------- ---------------- -------------------------
  GET      /api/users       Lista todos os usuários
  GET      /api/users/:id   Busca usuário por ID
  POST     /api/users       Cria um novo usuário
  PUT      /api/users/:id   Atualiza um usuário
  DELETE   /api/users/:id   Remove um usuário

------------------------------------------------------------------------

## 📋 Funcionalidades

✔ Cadastro de usuários\
✔ Listagem de usuários cadastrados\
✔ Integração entre front-end e API\
✔ Arquitetura MVC aplicada\
✔ API REST simples

------------------------------------------------------------------------

## 📌 Autor

Projeto desenvolvido por **Lucas Colabianqui** para atividade da
disciplina de **Engenharia de Software**.
