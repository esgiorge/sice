import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public itemsSiderbar:ItemService) { }

  ngOnInit(): void {
  }

}
