import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiColombiaService } from '../../../core/services/api-colombia.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  states$: Observable<any>;
  cities$: Observable<any>;
  stateSelected:number | null = 0;

  constructor(private api_service:ApiColombiaService){
    this.states$ = this.api_service.getStates()
    this.cities$ = this.api_service.getCities()
  }

  touristForm = new FormGroup({
    touristPlace:new FormControl(""),
    state: new FormControl(0),
    city: new FormControl("")
  });

  ngOnInit() :void{

  }
}
