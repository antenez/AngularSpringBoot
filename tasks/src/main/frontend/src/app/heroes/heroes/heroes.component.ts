import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Zeros to Heroes';
  selectedHero: Hero;

  /*
   = {
    id: 1,
    name: 'Edin Dzeko'
  };
  heroes = HEROES;
  */

  heroes: Hero[];

  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // note return void but assign value to mapped propperty
  getHeroes(): void {
    console.log('get heroes ');
    this.heroes  = this.heroService.getHeroes();
  }
}
