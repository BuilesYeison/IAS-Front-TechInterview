import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColombianState } from '../models/colombian-state.model';
import { ColombianCity } from '../models/colombian-city.model';
import { environment } from '../../../environments/environment.development';
import { ColombianTouristicAttractions } from '../models/colombian-touristic-atractions.model';

@Injectable({
  providedIn: 'root'
})
export class ApiColombiaService {

  constructor(private http:HttpClient) { }

  getStates():Observable<ColombianState[]>{
    return this.http.get<ColombianState[]>(`${environment.api_url}Department`);
  }

  getCities():Observable<ColombianCity[]>{
    return this.http.get<ColombianCity[]>(`${environment.api_url}City`)
  }

  getCitiesByState(state:number):Observable<ColombianCity[]>{
    return this.http.get<ColombianCity[]>(`${environment.api_url}Department/${state}/cities`)
  }

  getTouristicAttractions():Observable<ColombianTouristicAttractions[]>{
    return this.http.get<ColombianTouristicAttractions[]>(`${environment.api_url}TouristicAttraction`)
  }

  getTouristicAttraction(id:number):Observable<ColombianTouristicAttractions>{
    return this.http.get<ColombianTouristicAttractions>(`${environment.api_url}TouristicAttraction/${id}`)
  }
}
