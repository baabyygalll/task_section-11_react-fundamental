import './TodoList.css';

const TodoList = (props) => {
    console.log(props.dataTodos)

    return (
        <ul>{
            props.dataTodos.map((todo) => {
                // map() mengubah data array yang  berupa objek yang tadinya '{id: 1, title: 'eat'}' menjadi bentuk list seperti di bawah

            return <li key={todo.id} className={`${todo.completed ? "coret" : ""} list`}>{todo.title}</li>
            })
        }
        </ul>
    )
}

export default TodoList;