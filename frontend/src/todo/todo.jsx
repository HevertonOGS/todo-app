import React, { Component } from 'react';
import axios from 'axios';

import PageHader from '../template/pageHeader';
import TodoForm  from './todoForm';
import TodoList  from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear  = this.handleSearch.bind(this);

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(URL, { description })
            .then(_ => this.refresh());
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(_ => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(_ => this.refresh());
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(_ => this.refresh());
    } 

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <PageHader name='Tarefas' small='Cadastro'></PageHader>

                        <TodoForm 
                            description={this.state.description}
                            handleChange={this.handleChange}
                            handleAdd={this.handleAdd}
                            handleSearch={this.handleSearch}
                            handleClear={this.handleClear} />
                        <TodoList 
                            list={this.state.list}
                            handleMarkAsDone={this.handleMarkAsDone}
                            handleMarkAsPending={this.handleMarkAsPending}
                            handleRemove={this.handleRemove} />
                    </div>
                </div>
            </div>
        )
    }
}