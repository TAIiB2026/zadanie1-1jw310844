import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  
})
export class ListaComponent {
  items: string[] = [
    'Dron zwiadowczy',
    'Dron bojowy',
    'Dron transportowy',
    'Dron rolniczy'
  ];
}
