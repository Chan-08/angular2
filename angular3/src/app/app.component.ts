import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayComponent } from './array/array.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular3';
}
