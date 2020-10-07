import React from 'react';

const Form = ({inputText,setInputText,todos,setTodos,setStatus}) => {
    const InputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text :inputText,completed:false,id:Math.random() * 1000}
        ]);
        setInputText("");
    };
    const statusHandler =(e)=>{
        setStatus(e.target.value);
    };
    return (
        <form>
            <input value={inputText} onChange={InputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onClick={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="uncomplete">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
