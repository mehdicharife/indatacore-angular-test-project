import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorGeneratorService {

  constructor() { }

  getRandomRGB() : number {
    return Math.floor(Math.random() * 256);
  }

  getRandomColor() : string {
    return "rgb(" + this.getRandomRGB() + "," + this.getRandomRGB() + "," + this.getRandomRGB() + ")"
  }
}
