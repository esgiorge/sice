import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import {StyleClassModule} from 'primeng/styleclass';
import {DividerModule} from 'primeng/divider';




@NgModule({
  exports:[
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    TooltipModule,
    StyleClassModule,
    DividerModule
  ]
})
export class PrimeNgModule { }
