import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocationinfo';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
housingLocation = input.required<HousingLocationInfo>();

}
