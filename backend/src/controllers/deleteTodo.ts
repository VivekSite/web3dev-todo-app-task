import { Request, Response } from "express"
import Todo from "../models/todo";

const DeleteTodo = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const deletedData = await Todo.deleteOne({ _id: id });

        res.status(200).send({
            success: true,
            message: "Todo deleted successfully",
            deletedData,
        })
    } catch (error: any) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error deleting Todo",
            error: error.message
        })
    }
}

export default DeleteTodo;
