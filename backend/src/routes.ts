import express from 'express';
import GetAllTodo from './controllers/getAllTodo';
import CreateTodo from './controllers/createTodo';
import UpdateTodo from './controllers/updateTodo';
import DeleteTodo from './controllers/deleteTodo';

const router: express.Router = express.Router();

router.get('/getAllTodo', GetAllTodo);
router.post('/createTodo', CreateTodo);
router.patch('/updateTodo/:id', UpdateTodo);
router.delete('/deleteTodo/:id', DeleteTodo);

export default router;