import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent {
  drones: string[] = [
    'Polski',
    'Niemiecki',
    'Francuski',
    'Amerykański',
    'Izraelski'
  ];
}
