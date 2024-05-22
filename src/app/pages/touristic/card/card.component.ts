import { Component, Input, OnInit } from '@angular/core';
import { ApiColombiaService } from '../../../core/services/api-colombia.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  attractionId :number = 0;
  attraction$: Observable<any>;
  constructor(private apiService:ApiColombiaService,private activatedRoute: ActivatedRoute){
    this.attractionId = this.activatedRoute.snapshot.params['attractionId'];
    this.attraction$ = this.apiService.getTouristicAttraction(this.attractionId);
  }

  ngOnInit(){

  }
}
