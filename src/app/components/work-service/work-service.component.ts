import { Component } from '@angular/core';
import { BtServiceWorkComponent } from "../bt-service-work/bt-service-work.component";

@Component({
  selector: 'app-work-service',
  standalone: true,
  imports: [
     BtServiceWorkComponent,
    ],
  templateUrl: './work-service.component.html',
  styleUrl: './work-service.component.css'
  })
export class WorkServiceComponent {

}
