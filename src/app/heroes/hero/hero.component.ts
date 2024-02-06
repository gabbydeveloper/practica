import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;
  public changedName: boolean = false;
  public changedAge: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDesription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.changedName = true;
  }

  changeAge(): void {
    this.age = 25;
    this.changedAge = true;
  }

}
