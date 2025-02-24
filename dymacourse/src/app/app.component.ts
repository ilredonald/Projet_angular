import { Component } from '@angular/core';
import { DymaComponent } from './dyma/dyma.component';


@Component({
  selector: 'app-root',
  imports: [DymaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dymacourse';
}
