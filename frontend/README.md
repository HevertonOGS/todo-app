# TodoApp

## TodoApp (Backend)

### Dependências

- body-parser@1.15.2: Converte o corpo da requisição para vários formatos;
- express@4.14.0: Framework que otimiza a construção de aplicações web e API's;
- mongoose@4.7.0: Biblioteca do Node.JS que proporciona uma solução baseada em esquemas para modelar os dados da aplicação. Possui sistema de conversão de tipos, validação, criação de consultas e hooks para lógica de negócios;
- node-restful@0.2.5: Biblioteca que fornece uma API REST com express;
- pm2@2.1.5: Gerenciador de processos para o tempo de execução JavaScript Node.js
- nodemon@1.11.0: faz um auto-restart da aplicação toda vez que um arquivo do projeto for modificado

### Passos

1. Scripts do arquivo **package.json** (**dev e production**);
2. Criação de **loader.js** em **src**;
3. Criação de arquivo **server.js** em **config**;
4. Criar arquivo **database.js**;
5. Criar esquema **Todo** em **src/api/todo/todo.js**;
6. Criar **todoService.js** com métodos de requisição;
7. Mapeamento de rotas **src/config/routes.js;**
8. Habilitar o **CORS** em **src/config/cors.js**;

### Código

- **server.use(path, callback)**: montar uma função middleware específica;

## TodoApp (Frontend)

### Dependências

#### Webpack

- webpack@1.14.0
- webpack-dev-server@1.16.2

#### Babel

- babel-core@6.22.1
- babel-loader@6.2.10
- babel-plugin-react-html-attrs@2.0.0
- babel-plugin-transform-object-rest-spread@6.22.0
- babel-preset-es2015@6.22.0
- babel-preset-react@6.22.0

#### CSS e file loader

- extract-text-webpack-plugin@1.0.1
- css-loader@0.26.1
- style-loader@0.13.1
- file-loader@0.9.0

#### Bootstrap e Font Awesome

- bootstrap@3.3.7
- fontawesome@4.7.0

#### React e Axios

- react@15.4.2
- react-dom@15.4.2
- react-router@3.0.2
- axios@0.15.3

### Passos

1. Configuração do Build do Webpack:
   1. Criar arquivo **webpack.config.js**;
   2. Alterar arquivo **package.json**;
2. Criação de arquivo **index.html** em **public**;
3. Componente **App**;
4. Criação de **index.jsx**;
5. Componentes **Todo** e **About**;
6. Componente **Menu**;
7. Configuração das **Rotas**;
8. Component **PageHeader**;
9. Component **TodoForm** e **TodoList**;
10. Estrutura do **TodoForm**;
11. Componentes **Grid** e **IconButton**;
12. Renderização Condicional **(If)**;

