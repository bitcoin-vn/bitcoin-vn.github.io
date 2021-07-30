import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MenuRightComponent } from './components/menu-right/menu-right.component';
// primeng
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [MenuRightComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputSwitchModule,
    BlockUIModule,
    PanelModule,
    RadioButtonModule,
    MultiSelectModule,
    RippleModule
  ],
  exports: [
    MenuRightComponent
  ]
})
export class SharedModule { }
