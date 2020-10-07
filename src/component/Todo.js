import React from 'react';

const Todo = ({text, todo,todos,setTodos}) => {
    const DeleteHandler =()=>{
        setTodos(todos.filter((el)=>el.id !== todo.id));
        console.log(todo);
    };
    const CompleteHandler =()=>{
        setTodos(todos.map((item)=>{
            if(item.id==todo.id)
            return{
                ...item,
                completed:!item.completed
            };
            return item;
        }))
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ?"completed" : ""}`}>{text}</li>
            <button onClick={CompleteHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={DeleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
