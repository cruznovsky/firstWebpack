import React from "react";
import style from './TodoList.css';

const TodoList = props => {
    const deleteItem = event => {
        props.remove(props.data.id);
    };
    return (
        <li className={style.TodoListItem}>
            {props.data.text}
            <a className={style.TodoListItemDelete} href={"#"} onClick={deleteItem}>
                [delete]
        </a>
        </li>
    );
};

export default TodoList;