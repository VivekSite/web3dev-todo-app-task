import { Request, Response } from "express";
import Todo from "../models/todo";

interface newTodoDataType {
    desc?: string,
    completed?: boolean,
    priority?: number,
}

const UpdateTodo = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const newData: newTodoDataType | undefined = req.body;
        const updatedData = await Todo.updateOne({ _id: id }, newData);

        return res.status(200).send({
            success: true,
            message: "Data updated successfully.",
            updatedData,
        })
    } catch (error: any) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error updating todo",
            error: error.message
        });
    }
}

export default UpdateTodo