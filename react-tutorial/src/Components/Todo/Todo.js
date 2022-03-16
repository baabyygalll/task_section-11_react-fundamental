import TodoList from '../TodoList/TodoList';
import './Todo.css';
import { useState } from 'react';

const Todo = () =>  {

    const [getTodos, setTodos] = useState([
        {   id: 1,
            title: "Membuat Komponen",
            completed: true,
        },
        {   id: 2,
            title: "Unit Testing",
            completed: false,
        },
        {   id: 3,
            title: "Setup Development Environment",
            completed: true,
        },
        {   
            id: 4,
            title: "Deploy ke server",
            completed: false,
        },

    ])


   


    return (
        <div>
            <h3 className='todo'>To Do App</h3>
          
            <TodoList  dataTodos={getTodos} />
            
        </div>
    )
}

export default Todo;
