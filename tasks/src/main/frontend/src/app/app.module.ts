import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskService } from './tasks/task.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroServiceService } from './heroes/hero-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, FormsModule
  ],
  providers: [TaskService,
              HeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
