import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnChanges {
  classHome: string = '';
  classCreation: string = '';
  classResume: string = '';
  ariaHome!: string;
  ariaCreation!: string;
  ariaResume!: string;
  @Input() currentPage: string = 'home';

  ngOnChanges() {
    if (this.currentPage === 'home') {
      this.classHome = 'text-fuchsia-500 content-center m-1.5 md:mr-5';
      this.ariaHome = 'page';
      this.classCreation =
        'hover:text-fuchsia-500 content-center m-1.5 md:mr-5 md:ml-5';
      this.ariaCreation = '';
      this.classResume = 'hover:text-fuchsia-500 content-center m-1.5 md:ml-5';
      this.ariaResume = '';
    } else if (this.currentPage === 'creation') {
      this.classCreation =
        'text-fuchsia-500 content-center m-1.5 md:mr-5 md:ml-5';
      this.ariaCreation = 'page';
      this.classHome = 'hover:text-fuchsia-500 content-center m-1.5 md:mr-5';
      this.ariaHome = '';
      this.classResume = 'hover:text-fuchsia-500 content-center m-1.5 md:ml-5';
      this.ariaResume = '';
    } else if (this.currentPage === 'resume') {
      this.classResume = 'text-fuchsia-500 content-center m-1.5 md:ml-5';
      this.ariaResume = 'page';
      this.classHome = 'hover:text-fuchsia-500 content-center m-1.5 md:mr-5';
      this.ariaHome = '';
      this.classCreation =
        'hover:text-fuchsia-500 content-center m-1.5 md:ml-5 md:mr-5';
      this.ariaCreation = '';
    }
  }
}
