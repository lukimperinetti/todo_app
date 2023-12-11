import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        { id: 1, title: 'First todo', description: 'This is the first todo', done: false },
        { id: 2, title: 'Second todo', description: 'This is the second todo', done: true },
        { id: 3, title: 'Third todo', description: 'This is the third todo', done: false },
    ];

    getAllTodos(): Todo[] {
        return this.todos;
    }

    createTodo(todo : Todo) {
        this.todos = [...this.todos, todo]
    }
}
