import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm   from './todoForm';
import TodoList   from './todoList';

export default _ => (
    <div className='container'>
        <div className="row">
            <div className="col-12">
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>                
        </div>            
    </div>
);