import { Request, Response } from "express";
import Todo from "../models/todo";

interface QueryTypes {
  id: string | undefined;
  completed: boolean | undefined;
  priority: number | undefined;
}

const GetAllTodo = async (req: Request, res: Response) => {
  try {
    const { id, completed, priority }: QueryTypes =
      req.query as unknown as QueryTypes;

    const searchCriteria: { [key: string]: any } = {};
    if (id) searchCriteria._id = id;
    if (completed !== undefined) searchCriteria.completed = completed; // Handle both true and false
    if (priority) searchCriteria.priority = priority;

    const allTodos = await Todo.find(searchCriteria);

    res.status(200).send({
      success: true,
      message: "All Todos were successfully processed.",
      allTodos,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error retrieving all todos",
      error: error.message,
    });
  }
};

export default GetAllTodo;
