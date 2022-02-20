import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Misitems } from 'src/app/interfaces/misitems';
import { ItemService } from 'src/app/services/item.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] =[];
  activeItem: MenuItem;
  display: boolean = true;
  siderItems:Misitems[] =[];
  esconder:boolean =true;
  esconderUser:boolean =true;
  btnMenu:boolean =true;

  constructor( private itemService:ItemService) {
    
  this.activeItem = this.items[0];


  }

  ngOnInit(): void {
    this.esconder=true;
  this.esconderUser =true;
  this.btnMenu=true;
   this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                            {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                        ]
                    },
                    {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'pi pi-pi pi-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];
    }
  }


