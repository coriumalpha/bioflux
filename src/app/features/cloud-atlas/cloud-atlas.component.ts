import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Cloud {
  id: number;
  top: string;
  left: string;
  size: string;
  color: string;
  delay: string;
  duration: string;
}

@Component({
  selector: 'app-cloud-atlas',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './cloud-atlas.component.html',
  styleUrl: './cloud-atlas.component.scss'
})
export class CloudAtlasComponent implements OnInit {
  clouds: Cloud[] = [];
  private maxClouds = 6;
  private maxOccupiedRatio = 0.8; // Hasta 60% del área visible

  ngOnInit(): void {
    const screenArea = window.innerWidth * window.innerHeight;
    let totalCloudArea = 0;
    let id = 0;

    while (this.clouds.length < this.maxClouds && totalCloudArea / screenArea < this.maxOccupiedRatio) {
      const sizePx = this.randomBetween(700, 1300); // 🎯 tamaño grande
      const area = sizePx * sizePx;

      const cloud: Cloud = {
        id: id++,
        top: `${this.randomBetween(0, 100 - (sizePx / window.innerHeight) * 100)}%`,
        left: `${this.randomBetween(0, 100 - (sizePx / window.innerWidth) * 100)}%`,
        size: `${sizePx}px`,
        color: this.randomColor(),
        delay: `${this.randomBetween(0, 10)}s`,
        duration: `${this.randomBetween(30, 60)}s`,
      };

      this.clouds.push(cloud);
      totalCloudArea += area;
    }
  }

  private randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private randomColor(): string {
    const cyanShades = [
      'rgba(120, 190, 255, 0.4)',  // celeste suave
      'rgba(100, 170, 240, 0.4)',  // azul cálido
    ];

    const magentaShades = [
      'rgba(200, 130, 255, 0.4)',  // violeta/magenta suave
      'rgba(220, 100, 220, 0.4)',  // púrpura tenue
    ];

    const palette = [...cyanShades, ...magentaShades];

    return palette[Math.floor(Math.random() * palette.length)];
  }

}
