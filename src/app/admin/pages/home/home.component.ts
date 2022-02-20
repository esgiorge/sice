import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  display: boolean = true;
  constructor() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/admin/dashboard'},
      {label: 'Personal', icon: 'pi pi-fw pi-calendar', routerLink: '/admin/personal'},
      {label: 'Usuarios', icon: 'pi pi-fw pi-pencil',routerLink: '/admin/user'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    this.activeItem = this.items[0];
  }
}
