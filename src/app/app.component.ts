import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './pages/touristic/filter/filter.component';
import { ListComponent } from './pages/touristic/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FilterComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'IASTechnicalInterview';
}
