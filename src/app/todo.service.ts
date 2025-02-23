import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: string[]=[];
  private completedTasks:string[]=[];

  addTask(task: string): void{
    this.tasks.push(task);
  }

  completeTask(index: number): void{
    const task=this.tasks.splice(index,1)[0];
    this.completedTasks.push(task);
  }

  getCompletedTask(): string[]{
    return this.completedTasks;
  }

  deleteTask(index: number): void{
    this.tasks.splice(index,1);
    }
}
