import { Component } from '@angular/core';
import { ApiColombiaService } from '../../../core/services/api-colombia.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  attractions$ : Observable<any>;
  constructor(private apiService:ApiColombiaService){
    this.attractions$ = apiService.getTouristicAttractions()
  }
}
