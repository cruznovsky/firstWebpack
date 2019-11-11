import React from 'react';
import uuid from 'uuid';

import Title from "../components/Title.js";
import TodoList from "../components/TodoList.js";
import style from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "'To do' APP!",
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        const tasksList = this.state.data.map((data, key) => (
            <TodoList key={key} data={data} remove={this.removeTodo.bind(this)} />
        ));
        return (
            <div className={style.TodoApp}>
                <Title
                    title={this.state.title}
                    itemList={this.state.data.length}
                />
                <div className={style.TodoContainer}>
                    <ul className={style.TodoUl}>{tasksList}</ul>
                </div>
            </div>
        );
    }
}

export default App;