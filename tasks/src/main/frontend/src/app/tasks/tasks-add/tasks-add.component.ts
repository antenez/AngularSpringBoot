import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  /* This will be wired to form by ngModel to hold string value */
 addTaskValue: string = null;

  constructor(private taskService: TaskService) { }

  ngOnInit() { }

  onTaskAdd(event) {
    console.log('ontaskAdd');
    let task: Task = new Task(event.target.value, false, this.gettodayAsString());
    this.taskService.addTask(task)
      .subscribe(
        (newTask: Task) => {
          // clear value
          this.addTaskValue = '';

          // update list on gui will be handled in task service by EventEmiter
          this.taskService.onTaskAdded.emit(newTask);
        }
      );
  }

  gettodayAsString(): string {
      const today = new Date();
      let dd: any = today.getDay();
      let mm: any = today.getMonth() + 1;
      const yyyy: any = today.getFullYear();
      if (dd < 10) {
          dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }
      return mm + '/' + dd + '/' + yyyy;
   }
}
