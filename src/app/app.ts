import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet,  } from '@angular/router';
import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'assignment-3-homes-app';
}
