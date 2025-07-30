import { Injectable } from '@angular/core';
import { Task } from './task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private nextId: number = 1;

  // This method for fetching all data  //GET
  getTasks(): Task[] {  
    return this.tasks;
  }

  // This method for creating new data //POST
  addTask(title: string): void {
    const task: Task = { id: this.nextId++, title, completed: false };
    this.tasks.push(task);
  }

  // This method for deleteing data //DELETE
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  
}
