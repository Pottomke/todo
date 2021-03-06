import React, {useState, useEffect} from "react";
import './App.css';
//Importing components
import Form from './components/Form';
import ToDoList from "./components/ToDoList";


function App(props) {
  //State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] =useState("all");
  const [filteredTodos, setFilteredTodos] =useState([]);
  //const [edit, setEdit] =useState([]);
  // const [note, setNote] =useState([]);
  // const [date, setDate] =useState([]);
  

  //Run once when the app starts
  useEffect(()=>{
    getLocalTodos();
  },[]);

  //UseEffrect
  useEffect(()=>{
    //inputRef.current.focus();
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //const inputRef = useRef(null)

  //Functions and events
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos" , JSON.stringify([]));
    }else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>What do we have to do?</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        status={status} 
        setStatus={setStatus}
         />
      <ToDoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        // edit={edit}
        // setEdit={setEdit}
        // note={note}
        // setNote={setNote}
        // date={date}
        // setDate={setDate}
        />
    </div>
  );
}

export default App;
