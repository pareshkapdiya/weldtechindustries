import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/components/error/error.component';

export const routes: Routes = [
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'error' },
];
