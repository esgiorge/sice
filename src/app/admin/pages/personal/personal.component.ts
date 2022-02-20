import { Component, OnInit } from '@angular/core';
import { Misitems } from 'src/app/interfaces/misitems';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  siderItems:Misitems[] =[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.siderItems =[
      {
        titulo:'Registrar',
        icono:'pi-home',
        link:'/admin/registro'
      }
    ];
    this.itemService.siderItems = this.siderItems;
  }

}
