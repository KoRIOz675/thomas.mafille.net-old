import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "../../components/header/header.component";


@Component({
  selector: 'app-creation',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css'
})
export class CreationComponent {

}
