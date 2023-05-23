# Front-end Desafio Gestor de Tarefas

Este repositório contém o código-fonte para um desafio de front-end do Gestor de Tarefas. O objetivo do projeto é criar a interface de usuário para gerenciar tarefas em uma aplicação web.

## Funcionalidades

- Cadastrar um novo usuário.
- Login de usuário.
- Visualizar a lista de tarefas cadastradas.
- Criar uma nova tarefa, fornecendo um título, o status e a prioridade.
- Editar os detalhes de uma tarefa existente.
- Excluir uma tarefa.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 14 ou superior)
- Vue.js

## Tecnologias usadas no projeto

- Vue
- Vue-router
- Pinia
- Axios
- Yup
- Cypress
- Node.js
- TypeScript

## Instalação

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone o repositório:

```shell
git clone https://github.com/BR-Junior/front-end-desafio-gestor-de-tarefas.git
```

2. Navegue até o diretório do projeto:

```shell
cd front-end-desafio-gestor-de-tarefas
```

3. Instale as dependências do projeto usando o Yarn:

```shell
yarn install
```

## Execução

Após a conclusão da instalação e configuração, você pode executar o projeto com o seguinte comando:

```shell
yarn run dev
```

Isso iniciará o servidor de desenvolvimento e a aplicação estará disponível no seguinte endereço: [http://localhost:5174](http://localhost:5174).


## Configuração do projeto

```sh
yarn
```

### Compilar e atualizar para desenvolvimento

```sh
yarn dev
```

### Execute testes de ponta a ponta com [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

Isso executa os testes de ponta a ponta no servidor de desenvolvimento Vite.
É muito mais rápido do que a compilação de produção.

Mas ainda é recomendado testar a compilação de produção com `test:e2e` antes de implantar (por exemplo, em ambientes CI):

```sh
yarn build
yarn test:e2e
```
