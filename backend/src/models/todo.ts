import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    desc: { type: 'string', required: true},
    completed: { type: 'boolean', default: false },
    priority: { type: 'number', default: 0 },
}, { timestamps: true });

export default mongoose.model('todos', TodoSchema);