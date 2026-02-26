import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Register2 } from './register2/register2';

export const routes: Routes = [
  { path: 'demo', component: Register },
  { path: 'challenge', component: Register2 },
  { path: '', redirectTo: 'demo', pathMatch: 'full' }
];
