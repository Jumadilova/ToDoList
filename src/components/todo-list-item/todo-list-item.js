import React, {Component} from "react";
import './todo-list-item.css';
class TodoListItem extends Component {

    render (){
        const {label,onDeleted,done, important,  onTogImportant, onTogDone} = this.props;
        let todoListItem = 'todo-list-item';
        if (done) {todoListItem=todoListItem + ' done';}
        if (important) {todoListItem = todoListItem + ' important'}

        return (
            <span className={todoListItem}>
            <span className="todo-list-item-label"
                  onClick={onTogDone}
            >
                {label}
            </span>
            <button
                type="button" className="btn btn-outline-danger float-right"
                onClick = {onDeleted}
            >
                <i className="fa fa-trash-o"> </i>
            </button>
            <button type="button" className="btn btn-outline-success float-right"

                    onClick={onTogImportant}
            >
                <i className="fa fa-exclamation"> </i>
            </button>
        </span>
        )
    }
}
export default  TodoListItem;