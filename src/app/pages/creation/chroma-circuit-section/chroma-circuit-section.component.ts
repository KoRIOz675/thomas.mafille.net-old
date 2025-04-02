import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackCreationSectionComponent } from '../../../back-creation-section/back-creation-section.component';

@Component({
  selector: 'app-chroma-circuit-section',
  standalone: true,
  imports: [CommonModule, BackCreationSectionComponent],
  templateUrl: './chroma-circuit-section.component.html',
  styleUrls: ['./chroma-circuit-section.component.css']
})
export class ChromaCircuitSectionComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
