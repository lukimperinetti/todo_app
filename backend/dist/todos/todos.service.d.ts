import { Todo } from './interfaces/todo.interface';
export declare class TodosService {
    todos: Todo[];
    getAllTodos(): Todo[];
    createTodo(todo: Todo): void;
}
