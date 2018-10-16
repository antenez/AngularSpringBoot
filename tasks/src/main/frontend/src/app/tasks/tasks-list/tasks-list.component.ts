import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  selectedTask: Task;

  ngOnInit() {
      // first step was static
      // this.tasks.push(new Task(1, "task 1", true, '07/01/2018'));
      // this.tasks.push(new Task(2, "task 2", true, '07/01/2018'));
      // this.tasks.push(new Task(3, "task 3", true, '07/01/2018'));
      // this.tasks.push(new Task(4, "task 4", false,'07/01/2018'));

      // second part is from backend
        this.taskService.getTasks()
            .subscribe(
                (tasks: any[]) => {
                        this.tasks = tasks;
                    },
                    (error) => console.log(error)
                );
        }
    getDueDateLabel(task: Task) {
        return task.completed ? 'label-success' : 'label-primary';

    }

    onTaskChange(event, task) {
        // console.log('task changed');
        this.taskService.saveTask(task, event.target.checked).subscribe();

    }

    onSelect(task: Task) {
        console.log('task selected');
        this.selectedTask = task;
    }
}
