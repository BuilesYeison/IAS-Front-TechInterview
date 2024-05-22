import { ColombianCity } from "./colombian-city.model";

export interface ColombianTouristicAttractions{
  id:number,
  name:string,
  description:string,
  images:string[],
  city:ColombianCity
}
