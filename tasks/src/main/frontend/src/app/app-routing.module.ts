import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


