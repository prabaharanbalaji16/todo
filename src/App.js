import React,{useState,useEffect} from 'react';
import './App.css';
import Form from "./component/Form";
import TodoList from './component/TodoList';

function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos]=useState([]);
  const [status,setStatus] =useState(['all']);
  const [filteredTodos,setfilteredTodos]=useState([]);

  useEffect(()=>{
    getLocalStorage();
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalStorage();
  },[todos,status]);

  const filterHandler =()=>{
    switch(status){
      case "complete":
        setfilteredTodos(todos.filter((todo)=> todo.completed===true));
        break;
      case "uncomplete":
        setfilteredTodos(todos.filter((todo)=> todo.completed===false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };


  const saveLocalStorage = () =>{
    localStorage.setItem("todos",JSON.stringify(todos));
}
const getLocalStorage = () =>{
  if(localStorage.getItem("todos")===null)
  {
    localStorage.setItem("todos",JSON.stringify([])); 
  }
  else
  {
    let localTodo = JSON.parse(localStorage.getItem("todos"));
    setTodos(localTodo);
  }
}
  return (
    <div className="App">
      <header>
        <h1>Make Your ToDo list</h1>
      </header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList 
      filteredTodos={filteredTodos} 
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
}

export default App;
