import React,{useState} from 'react'
import TodoList from './TodoList.js';
import './App.css';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }

  const newTask = e =>{
    e.preventDefault();
    const newList = [...todos,task];
    setTodos(newList);
    setTask("");
  }
  const deleteTask = (indexValue) =>{
    const newList = todos.filter((todo,index) => index !== indexValue);
    setTodos(newList);
  }
  const count= () => {
      return todos.reduce((total, curr) => {
        if (!curr.done) return (total += 1);
        return total;
      }, 0);
  }
  return (
    <div id='tasks'>
      <center>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D09AQF561xoYK0vVw/company-featured_1128_635/0/1592503977770?e=1675900800&v=beta&t=B1WMHFqBCxLt7EMp1UcGHUY25sOIun7IFgvdGXUBYIA"
        alt="logo"
        height="150px"
      />
        <form onSubmit={newTask} id='list'>
          <h1 id='heading'>Virtusa Learnings</h1>
          <input size="20" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
          <button id='submit'>Add</button>
        </form>
        <TodoList todolist={todos} deleteTask={deleteTask}/>
        <h2 id='tasks'>No.of Topics to learn  : {count()}</h2>
        </center>
    </div>
  )
}

export default App