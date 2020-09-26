<h1 align="center">
    <a href="#" alt="site do ecoleta">Airbnb </a>
</h1>

<h3 align="center">
    Um clone do Airbnb, uma das melhores aplicações para encontrar um lugarzinho nas suas viagens.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/bprofiro/airbnb-clone?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/bprofiro/airbnb-clone">
  
  <a href="https://github.com/bprofiro/airbnb-clone/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/bprofiro/airbnb-clone">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/bprofiro/airbnb-clone/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/bprofiro/airbnb-clone?style=social">
  </a>

  <a href="https://rocketseat.com.br">
    <img alt="Feito pela Brenda" src="https://img.shields.io/badge/feito%20por-Rocketseat-%237519C1">
  </a>
</p>

<h4 align="center">
	🚧  Em desenvolvimento 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
     * [Mobile](#mobile)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
     * [Server](#user-content-server--nodejs----typescript)
     * [Mobile](#user-content-mobile--react-native----typescript)
   * [Contribuidores](#-contribuidores)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Airbnb - é um clone da aplicação do Airbnb desenvolvida utilizando AdonisJS no backend, ReactJS no frontend web e React Native no frontend mobile.

Projeto desenvolvido durante uma série de posts no [**Blog da Rocketseat**](https://blog.rocketseat.com.br/).
---

## ⚙️ Funcionalidades

- [x] Usuários podem se cadastrar na plataforma enviando:
  - [x] nome, email e senha

- [x] Usuários podem se autenticar na plataforma enviando:
  - [x] email e senha

- [x] Usuários podem cadastrar seus imóveis na plataforma enviando:
  - [x] imagens do imóvel
  - [x] nome do imóvel
  - [x] endereço, latitude e longitude
  - [x] além de ter a opção de filtrar os imóveis disponíveis em até 10km de distância informando sua: 
    - latitude
    - longitude
---

## 🎨 Layout


### Ainda não disponível

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/bprofiro/airbnb-clone.git

# Acesse a pasta do projeto no terminal/cmd
$ cd airbnb-clone

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ adonis serve --dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

#### 🧭 Rodando a aplicação web (Frontend) - Ainda não disponível

#### 🧭 Rodando a aplicação mobile (Frontend) - Ainda não disponível
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Servidor**  ([AdonisJS](https://adonisjs.com/)

-   **[SQLite](https://www.sqlite.org/index.html)**
-   **[JavaScript](https://www.javascript.com/)**

> Veja o arquivo  [package.json](https://github.com/bprofiro/airbnb-clone/blob/master/server/package.json)
---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor
<p align="center">
  <a href="https://github.com/bprofiro">
  <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/59852846?s=460&u=7eefe48768a2c3f95271868f85d8e61f9ffbebad&v=4" width="100px;" alt=""/>
  <br />
  <sub><b>Brenda Profiro</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago/" title="Rocketseat">🚀</a>
  <br />
</p>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Brenda Profiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/brenda-profiro/)

---