import React from "react";



const Todo = ({text,todos,setTodos,todo,inputText,note,date}) => {
    
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

    const editHandler =() =>{
        setTodos(todos.map((item) =>{
            if (item.id === todo.id){
                return{
                    ...item, editMode: !item.editMode
                };
            }
                return item;
        }));
    }

    const editTextHandler = (e) => {
        setTodos(todos.map((item) =>{
            if (item.id === todo.id){
                return{
                    ...item, text: e.target.value
                    
                };
            }
                return item;
        }));
    }

    const handleUpdatedDone = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setTodos(todos.map((item) =>{
                if (item.id === todo.id){
                    return{
                        ...item, editMode: !item.editMode
                        
                    };
                }
                    return item;
            }));
            
          }
    }

    const noteHandler =() =>{
        setTodos(todos.map((item) =>{
            if (item.id === todo.id){
                return{
                    ...item, editMode: !item.editMode
                };
            }
                return item;
        }));
    }

    const noteTextHandler = (e) => {
        console.log(e.target.value)
        setTodos(todos.map((item) =>{
            if (item.id === todo.id){
                return{
                    ...item, note: e.target.value
                    
                };
            }
                return item;
        }));
    }

    const dateTextHandler = (e) => {
        console.log(e.target.value)
        setTodos(todos.map((item) =>{
            if (item.id === todo.id){
                return{
                    ...item, date: e.target.value
                    
                };
            }
                return item;
        }));
    }
 

    return(
        <div className="todo" >
            <li className={`todo-item ${todo.completed ? "completed" :"" }`}>
            <input value= {inputText} 
                    onChange={editTextHandler}
                    onKeyDown={handleUpdatedDone}
                    type="text" 
                    placeholder="Update your item" 
                    className={`edit-todo ${todo.editMode ? "" :"editMode" }`} 
                />
                <input value= {inputText} 
                    onChange={noteTextHandler}
                    onKeyDown={handleUpdatedDone}
                    type="text" 
                    placeholder="Make a note" 
                    className={`edit-todo ${todo.editMode ? "" :"editMode" }`}
                />  
                <input value= {inputText} 
                    onChange={dateTextHandler}
                    onKeyDown={handleUpdatedDone}
                    type="date" 
                    className={`edit-todo ${todo.editMode ? "" :"editMode" }`}
                /> 
                <div onDoubleClick={editHandler}className="todo-text">{text}</div>
                <div className="note">{note}</div>
                <div className="date">{date}</div>
            </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            <button onClick={noteHandler} className="note-btn"><i className="fas fa-edit"></i></button>
        </div>
    );
};

export default Todo;