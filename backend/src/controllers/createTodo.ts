import { Request, Response } from "express";
import Todo from "../models/todo";
import { TodoType } from "../types";

const CreateTodo = async (req: Request, res: Response) => {
    try {
        const data: Response<TodoType | undefined> = req.body;
        const newTodo: TodoType  = await Todo.create(data);

        res.status(201).send({
            success: true,
            message: "Todo created successfully.",
            createdTodo: newTodo
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
}

export default CreateTodo;