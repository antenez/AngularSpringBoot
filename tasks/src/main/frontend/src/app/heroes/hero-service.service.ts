import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero.model';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


// Mark the class as participant in dependency injection in root scope
@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
     // TODO: send the message _after_ fetching the heroes
    this.messageService.addMessage('HeroService: fetched heroes');
    return of(HEROES);
  }
}
