# Desafio FullStack resolvido.


## Estrutura do repositório:
Este projeto é um monorepo construído com Lerna (para saber mais => https://lerna.js.org/)

- `backend` (API Graphql para realizar desafio de backend)
- `frontend` (Repo para criação do frontend do desafio)

```
packages/
    backend/
        src/
            ...
        package.json
        serverless.yml
    frontend/
        package.json

package.json
```

#O que foi feito:

-Adicionado cross-env para funcionar o projeto tanto no windows quando em Linux.

-Feita a mutation "login" para solicitar os dados do backend utilizando GraphQL.

-Frontend feito em angular 17, com tailwind e graphql request.

Para executar os scripts presentes nos arquivos package.json:

- `yarn lerna run` + comando (ex: `yarn lerna run test:coverage`)
- Em um projeto específico `yarn lerna run start --scope=backend`, o scope é o name que está no package.json
- Também é possível executar os comandos normalmente entrando na pasta especifica do projeto.

-Clonar o projeto usando git clone.

-Rodar no terminal "yarn" para baixar as dependências.

-Já existe um usuário cadastrado com o email desafio@bondy.com.br e senha 123456, que está salva encriptado utilizando a lib bcrypt;

Para executar os scripts presentes nos arquivos package.json:

yarn lerna run + comando (ex: yarn lerna run test:coverage)
Em um projeto específico yarn lerna run start --scope=backend, o scope é o name que está no package.json
Também é possível executar os comandos normalmente entrando na pasta especifica do projeto.
