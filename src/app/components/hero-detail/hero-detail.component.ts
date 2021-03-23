import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/models/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

   hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void{
    let id = +(this.route.snapshot.paramMap.get('id') + '');
    id = isNaN(id) ? 0 : id;

    this.heroService.getHeroById(id).subscribe((hero: Hero | undefined) => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
