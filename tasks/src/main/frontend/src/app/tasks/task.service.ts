import { Http, HttpModule } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable, NgModule} from '@angular/core';
import { map } from 'rxjs/operators';
import { Task } from './task.model';
import { Observable } from 'rxjs';


@Injectable()
export class TaskService {

    constructor(private http: Http) {
        }

    getTasks(): Observable<Task[]> {
        return  this.http.get('/api/tasks').pipe(map((response: any) => response.json()));
    }

    saveTask(task: any, checked: any) {
        task.completed = checked;
        return this.http.post('/api/tasks/save', task).pipe(map((response: any) => response.json() ));
    }

}
