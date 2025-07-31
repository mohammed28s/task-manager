import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';
import { Task } from '../task'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.html',
  imports: [CommonModule],
  styleUrl: './task-list-component.css'
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { } // this is a constractor for the taskService 

  //by { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

}
