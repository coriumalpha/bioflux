import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cloud-atlas',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cloud-atlas.component.html',
  styleUrl: './cloud-atlas.component.scss'
})
export class CloudAtlasComponent {
  title = 'bioflux';
}
