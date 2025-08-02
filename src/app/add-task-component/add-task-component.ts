import { Component } from '@angular/core';
import { TaskService } from '../tasks.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
@Component({
  selector: 'app-add-task-component',
  imports: [FormsModule],
  templateUrl: './add-task-component.html',
  styleUrl: './add-task-component.css'
})
export class AddTaskComponent {
  newTaskTitle: string = ''; // this is for stroing new task title from user 

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }

}
