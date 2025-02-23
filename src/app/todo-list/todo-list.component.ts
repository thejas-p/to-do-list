import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  newTask: string = '';
  constructor(private todoService: TodoService) {}

  addTask(): void {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  getTasks(): string[] {
    return this.todoService.getTasks();
  }

  completeTask(index: number): void {
    this.todoService.completeTask(index);
  }

  getCompletedTask(): string[] {
    return this.todoService.getCompletedTask();
  }

  deleteTask(index: number): void {
    this.todoService.deleteTask(index);
  }
}
