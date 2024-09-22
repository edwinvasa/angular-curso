import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Dr. Strange'];
  public heroDeleted?: string;

  removeLastHero():void {
    console.log('Hello Remove');
    this.heroDeleted = this.heroNames.pop();
  }

  deleteByName(name: string): void {
    console.log('Hello?')
    this.heroDeleted = name;
    this.heroNames = this.heroNames.filter(hero => hero !== name);
    console.table(this.heroNames);

  }
}
