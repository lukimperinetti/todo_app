import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getAllTodos(): Todo[];
}
