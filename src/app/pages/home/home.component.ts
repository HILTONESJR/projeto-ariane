import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { SobreMimComponent } from '../../components/sobre-mim/sobre-mim.component';
import { WorkServiceComponent } from '../../components/work-service/work-service.component';
import { MyWorkComponent } from '../../components/my-work/my-work.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DeveloperComponent } from '../../components/developer/developer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      MenuComponent,
      BannerComponent,
      SobreMimComponent,
      WorkServiceComponent,
      MyWorkComponent,
      FooterComponent,
      DeveloperComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
