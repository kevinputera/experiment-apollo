export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

class TodoStore {
  id: number;
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        text: "Cook pizza",
        completed: false
      },
      {
        id: 2,
        text: "Walk rover",
        completed: true
      }
    ];
    this.id = 3;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  save(newTodo: Partial<Todo>): Todo {
    const todo: Todo = {
      id: this.id++,
      text: newTodo.text || "",
      completed: newTodo.completed || false
    };
    this.todos.push(todo);
    return todo;
  }
}

export const Store = new TodoStore();
