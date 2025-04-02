import { Routes } from '@angular/router';

import { CreationComponent } from './pages/creation/creation.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { CreationSectionComponent } from './components/creation-section/creation-section.component';
import { ChromaCircuitSectionComponent } from './pages/creation/chroma-circuit-section/chroma-circuit-section.component';
import { WahibaDesertSectionComponent } from './pages/creation/wahiba-desert-section/wahiba-desert-section.component';
import { LanubisSectionComponent } from './pages/creation/lanubis-section/lanubis-section.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'MAFILLE | Home' },
  { path: 'home', component: HomeComponent, title: 'MAFILLE | Home' },
  {
    path: 'creation',
    component: CreationComponent,
    title: 'MAFILLE | Creation',
    children: [
      {
        path: '',
        component: CreationSectionComponent,
        pathMatch: 'full',
        title: 'MAFILLE | Creation',
      },
      {
        path: 'chroma-circuit',
        component: ChromaCircuitSectionComponent,
        pathMatch: 'full',
        title: 'MAFILLE | Creation',
      },
      {
        path: 'wahiba-desert',
        component: WahibaDesertSectionComponent,
        pathMatch: 'full',
        title: 'MAFILLE | Creation',
      },
      {
        path: 'lanubis',
        component: LanubisSectionComponent,
        pathMatch: 'full',
        title: 'MAFILLE | Creation',
      },
    ],
  },
  { path: 'resume', component: ResumeComponent, title: 'MAFILLE | Resume' },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'MAFILLE | Home',
  },
];
