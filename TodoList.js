import React from 'react'

const TodoList = ({todolist,deleteTask}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div  key={index}>
                <h2 id='text'>{todo} &nbsp; 
                <button onClick={() => deleteTask(index)}>Delete</button></h2>
            </div>)}
        </div>
    )
}

export default TodoList