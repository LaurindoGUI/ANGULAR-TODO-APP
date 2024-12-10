import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  taskTitle: string = '';
  taskDescription: string = '';

  @Output() taskAdded = new EventEmitter<{ title: string; description: string; status: string; date: Date }>();

  addTask() {
    const task = {
      title: this.taskTitle,
      description: this.taskDescription,
      status: 'pendente',
      date: new Date()
    };
    this.taskAdded.emit(task);
    this.taskTitle = '';
    this.taskDescription = '';
  }
}
