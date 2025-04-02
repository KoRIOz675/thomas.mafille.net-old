import { Component } from '@angular/core';

import { HeaderComponent } from "../../components/header/header.component";
import { ResumeSectionComponent } from "../../components/resume-section/resume-section.component";

@Component({
  selector: 'app-resume',
  imports: [HeaderComponent, ResumeSectionComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
