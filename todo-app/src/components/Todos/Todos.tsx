import styles from './todos.module.css'

interface Todo {
    _id: string,
    desc: string;
    completed: boolean;
    priority: number;
  }

interface TodosParamsTypes {
    todo: Todo,
    DeleteTodo: (todo: Todo) => Promise<void>,
    UpdateTodo: (todo: Todo) => Promise<void>
}

const Todos = ({ todo, DeleteTodo, UpdateTodo }: TodosParamsTypes) => {

  return (
    <div className={styles.todo}>
        <p>{todo.desc}</p>
        <p>{todo.priority}</p>
        <div>
            <button onClick={() => UpdateTodo(todo)} style={{backgroundColor: `${todo.completed ? "rgb(12, 180, 124)" : "rgb(198, 198, 198)"}`}}>done</button>
            <button onClick={() => DeleteTodo(todo)}>delete</button>
        </div>
    </div>
  )
}

export default Todos