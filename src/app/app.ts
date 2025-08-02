import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from "./add-task-component/add-task-component";
import { TaskListComponent } from "./task-list-component/task-list-component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskComponent, TaskListComponent, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task-manager');
}
