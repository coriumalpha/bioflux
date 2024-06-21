import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cloud-atlas',
  standalone: true,
  imports: [NgClass, NgForOf, RouterOutlet],
  templateUrl: './cloud-atlas.component.html',
  styleUrl: './cloud-atlas.component.scss'
})
export class CloudAtlasComponent {
  clouds: any[] = [];
  hueStart: number;
  hueRange: number = 45; // Rango de 60 grados para mantener colores similares dentro de un grupo
  numGroups: number = 3; // Dos grupos de colores, uno base y uno complementario

  constructor() {
    this.hueStart = Math.floor(Math.random() * (360 - this.hueRange));
    // Genera nubes en dos grupos diferentes
    this.clouds = Array.from({ length: 10 }, (_, index) => ({
      color: this.getRandomColor(index % this.numGroups),
    }));
  }

  private getRandomColor(group: number): string {
    let hue;
      // Grupo complementario, ajustando X grados para obtener el "complementario"
    hue = (this.hueStart + (30 * group)) % 360 + Math.floor(Math.random() * this.hueRange);

    const saturation = 50 + Math.floor(Math.random() * 25); // Saturación entre 50% y 75%
    const lightness = 40 + Math.floor(Math.random() * 20); // Luminosidad entre 40% y 60%
    const opacity = 0.6; // Opacidad fija
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
  }
}
