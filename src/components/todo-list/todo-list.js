import React from "react";
import '../todo-list-item/todo-list-item.css'
import TodoListItem from "../todo-list-item"

const ToDoList = ({todos, onAppDeleted, onToggleImportant, onToggleDone}) => {
    return (

        <ul className="list-group-todo-list">
            {todos.map(function (item) {
                    const {id, ...itemProps} = item;

                    return (
                        <li key={id} className="list-group todo-list">
                            <TodoListItem
                                {...itemProps}
                                onDeleted={() => onAppDeleted(id)}
                                onTogImportant={() => onToggleImportant(id)}
                                onTogDone={() => onToggleDone(id)}
                            />
                        </li>
                    )

                }
            )
            }
        </ul>
    )
};


export default ToDoList;