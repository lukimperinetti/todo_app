import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

// localhost:5000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService : TodosService) {}

    @Get()
    getAllTodos(): Todo[] {
        return this.todosService.getAllTodos();
    }
}
