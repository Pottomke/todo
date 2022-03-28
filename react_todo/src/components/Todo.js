import React from "react";


const Todo = ({text,todos,setTodos,todo}) => {
    //Events
    const deleteHandler =() =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler =() =>{
        setTodos(todos.map((item) =>{
            if (item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
                return item;
        }));
    }

    {/*const noteHandler =() =>{
        
    }*/}

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" :"" }`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
           {/* <button onClick={noteHandler} className="note-btn"><i className="fa-solid fa-feather-pointed"></i></button>*/}
        </div>
    );
};

export default Todo;