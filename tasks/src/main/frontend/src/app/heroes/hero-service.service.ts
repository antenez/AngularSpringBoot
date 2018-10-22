import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero.model';
import { HEROES } from './heroes/mock-heroes';


// Mark the class as participant in dependency injection in root scope
@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
