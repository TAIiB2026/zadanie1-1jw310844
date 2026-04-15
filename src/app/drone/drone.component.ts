import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  standalone: false
  //styleUrls: ['./drone.component.css']
})
export class DroneComponent {

  @Input() name: string = '';

  energy: number = 0;

  increaseEnergy() {
    if (this.energy < 100) {
      this.energy += 5;

      if (this.energy > 100) {
        this.energy = 100;
      }
    }
  }

  getStatus(): string {
    if (this.energy < 15) {
      return 'Dron należy podłączyć do ładowania';
    } else if (this.energy <= 90) {
      return 'Poziom baterii jest w normie';
    } else {
      return 'Dron jest w pełni naładowany';
    }
  }
}