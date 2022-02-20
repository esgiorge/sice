import { Injectable } from '@angular/core';
import { Misitems } from '../interfaces/misitems';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  siderItems : Misitems[];
  constructor() {
    this.siderItems =[{
      titulo:'Equipos',
      icono:'pi-users',
      link:'/admin/personal'
    }]
   }
}
