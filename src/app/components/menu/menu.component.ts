import { Component } from '@angular/core';
import { BtConsultaComponent } from '../bt-consulta/bt-consulta.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BtConsultaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuValue:Boolean = false;
  menu_icon:string='bi bi-list';
  openMenu(){
    this.menuValue =! this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x':'bi bi-list';
  }
  closeMenu(){
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }
}
