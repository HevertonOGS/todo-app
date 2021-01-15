import React, { Component } from 'react';
import PageHader from '../template/pageHeader';
import TodoForm  from './todoForm';
import TodoList  from './todoList';

export default class Todo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <PageHader name='Tarefas' small='Cadastro'></PageHader>

                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        )
    }
}