import styles from "./mainWindow.module.css";
import axios from "axios";
import Todos from "../Todos/Todos";
import { useEffect, useState } from "react";

interface Todo {
  _id: string;
  desc: string;
  completed: boolean;
  priority: number;
}

const MainWindow = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState(0);

//   Function for Fetching all todos
  const FetchAllTodo = async () => {
    try {
      const URL = "http://localhost:8080/getAllTodo";
      const response = await axios.get(URL);
      setTodoList(response.data.allTodos.sort((a: Todo, b: Todo) => b.priority - a.priority));

    } catch (error: any) {
      console.error(error.message);
    }
  };

//   Function for deleteting todos
  const DeleteTodo = async (todo: Todo) => {
    try {
        await axios.delete(`http://localhost:8080/deleteTodo/${todo._id}`);
        
        // alert("Todo deleted successfully.");
    } catch (error: any) {
        alert(error.message);
    }

    FetchAllTodo();
  };

//   Function for creating todo
  const CreateTodo = async (e: any) => {
    e.preventDefault();
    if (desc === "") {
      alert("Description can not be empty!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/createTodo", {
        desc,
        completed: false,
        priority,
      });

      alert("Created successfully");
      setDesc("");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }

    FetchAllTodo();
  };

//   Function for updating Todo
  const UpdateTodo = async (todo: Todo) => {
    try {
        await axios.patch(`http://localhost:8080/updateTodo/${todo._id}`, {
            completed: true,
        });
    } catch (error: any) {
        alert(error.message);
    }

    FetchAllTodo();
  }

//   Fetches all todos when loaded first
  useEffect(() => {
    FetchAllTodo();
  }, []);

  return (
    <div>
        {/* Form for creating new todo */}
      <form>
        <textarea
          name="desc"
          id="desc"
          cols={30}
          rows={10}
          className={`${styles.description} ${styles.commonCSS}`}
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Set Priority Number"
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          className={`${styles.description} ${styles.commonCSS}`}
        />
        <button
          type="submit"
          className={`${styles.commonCSS} ${styles.createButton}`}
          onClick={CreateTodo}
        >
          Create Todo
        </button>
      </form>

        {/* Headings for Todo */}
      <div className={styles.headings}>
        <h2>Description</h2>
        <h2>Priority</h2>
        <h2>Actions</h2>
      </div>
      {/* Map all todos */}
      <div className={`${styles.sidebarElement} ${styles.todoListSection}`}>
        {todoList.map((todo) => (
          <>
            <Todos todo={todo} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo} />
          </>
        ))}
      </div>
    </div>
  );
};

export default MainWindow;
