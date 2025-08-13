import { Component } from '@angular/core'; // Importing decorator: Component

interface TodoItem {
  id: number;
  task: string; // Description of the task
  completed: boolean;
}

// Component decorator
@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList { // The component logic should be implemented in the class
  newTask: string = '';

  // Array of TodoItem objects (with 2 objects)
  todos: TodoItem[] = [
    { id: 1, task: 'Drink Water', completed: false },
    { id: 2, task: 'Clean Desktop', completed: false }
  ];

  addTask() {
    if (this.newTask.trim()) { // If newTask is not empty
      // Checking if there are any existing to-do items
      const newId = this.todos.length > 0 // Condition
      // Finding the highest ID (using spread operator ...) to convert array to arguments)
      // Also, extracting all IDs into an array
      ? Math.max(...this.todos.map(todo => todo.id)) + 1 // valueIfTrue
      // If not, assigning 1 as the first ID
      : 1; // valueIfFalse

      // Adding a new object to the end of the todos array
      this.todos.push({
        id: newId,
        task: this.newTask.trim(),
        completed: false
      });
      this.newTask = ''; // Resetting the newTask input field
    }
  }

}
