# TodoApp

## TodoApp (Backend)

### Dependencies

- body-parser@1.15.2: Converts the request body into various formats;
- express@4.14.0: Framework that optimizes the construction of web applications and APIs;
- mongoose@4.7.0: Node.JS library that provides a schema-based solution for modeling application data. It has a type conversion system, validation, query creation and hooks for business logic;
- node-restful@0.2.5: Library that provides a REST API with express;
- pm2@2.1.5: Process manager for the JavaScript Node.js runtime
- nodemon@1.11.0: auto-restarts the application every time a project file is modified

### Steps

1. Scripts from the archive **package.json** (**dev and production**);
2. Creating **loader.js** in **src**;
3. File creation **server.js** in **config**;
4. Create file **database.js**;
5. Create schema **Todo** in **src/api/todo/todo.js**;
6. Create **todoService.js** with request methods;
7. Route mapping **src/config/routes.js;**
8. Enable **CORS** in **src/config/cors.js**;

### Code

- **server.use(path, callback)**: set up a specific middleware function;

## TodoApp (Frontend)

### Dependencies

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

#### CSS and file loader

- extract-text-webpack-plugin@1.0.1
- css-loader@0.26.1
- style-loader@0.13.1
- file-loader@0.9.0

#### Bootstrap and Font Awesome

- bootstrap@3.3.7
- fontawesome@4.7.0

#### React and Axios

- react@15.4.2
- react-dom@15.4.2
- react-router@3.0.2
- axios@0.15.3