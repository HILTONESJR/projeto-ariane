import { Component } from '@angular/core';
import { BtSpeakComponent } from "../bt-speak/bt-speak.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BtSpeakComponent ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
