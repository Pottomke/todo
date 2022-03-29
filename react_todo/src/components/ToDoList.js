import React from "react";
//Import components
import Todo from "./Todo";


const ToDoList = ({todos,setTodos,filteredTodos,edit, setEdit, setNote}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        key={todo.id}
                        text={todo.text} 
                        todos={todos} 
                        setTodos={setTodos} 
                        todo={todo}
                        // edit={edit}
                        // setEdit={setEdit}
                        note={todo.note}
                        // setNote={setNote}
                        date={todo.date}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;