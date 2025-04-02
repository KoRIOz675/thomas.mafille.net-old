import { Component } from '@angular/core';

import { HeaderComponent } from "../../components/header/header.component";
import { HomeSectionComponent } from '../../components/home-section/home-section.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomeSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
