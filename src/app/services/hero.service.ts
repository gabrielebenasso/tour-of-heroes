import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../components/heroes/models/hero';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('');
    return of(HEROES).pipe(delay(5000));
  }
}
