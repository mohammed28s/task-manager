import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks.service';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.html',
  styleUrls: ['./add-task-component.css'],
  // ✅ Add ReactiveFormsModule
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class AddTaskComponent implements OnInit {

  newTaskTitle: string = '';
  taskForm: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, this.noSpecialCharactersValidator()]]
    });
  }

  ngOnInit(): void {}

  noSpecialCharactersValidator() {
    return (control: AbstractControl) => {
      const regex = /^[a-zA-Z0-9\s]*$/;
      return regex.test(control.value) ? null : { specialCharacters: true };
    };
  }

  addTask(): void {
    if (this.taskForm.valid) {
      const title = this.taskForm.get('title')?.value;
      this.taskService.addTask(title);
      this.taskForm.reset();
    }
  }

  get title() {
    return this.taskForm.get('title');
  }
}
