import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { title: string; description: string; status: string; date: Date }[] = [];
  @Output() taskRemoved = new EventEmitter<{ title: string; description: string; status: string; date: Date }>();

  toggleTaskStatus(task: { title: string; description: string; status: string; date: Date }) {
    task.status = task.status === 'pendente' ? 'concluída' : 'pendente';
  }

  removeTask(task: { title: string; description: string; status: string; date: Date }) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskRemoved.emit(task);
  }
}
