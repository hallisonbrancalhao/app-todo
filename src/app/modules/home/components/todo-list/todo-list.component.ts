import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number): void {
    if (event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
