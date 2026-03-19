import { Component, inject } from '@angular/core';
import { HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports:[HousingLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home{
 // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
 housingLocationList: HousingLocationInfo[] = [];
 // Injecting HousingService into the Component
 housingService: HousingService = inject(HousingService);

 filteredLocationList: HousingLocationInfo[] = [];
 constructor() {
 this.housingLocationList = this.housingService.getAllHousingLocations();
 this.filteredLocationList = this.housingLocationList;
 }
 filterResults(text: string) {
 if (!text) {
 this.filteredLocationList = this.housingLocationList;
 return;
 }
 this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
 housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
 );
 }
}
