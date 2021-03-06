import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from '../../data/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;


  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(private heroService: HeroService) { }

  ngOnInit()  {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {

    this.heroService.deleteHero(hero.id)
    .subscribe(()=> {
    this.heroes = this.heroes.filter(h => h !== hero)});
  }
}
