import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadSelectedModules } from './app.preload.strategy';
import { HomeComponent } from './containers/home/home.component';
import { AwardComponent } from './containers/awards/award.component';

import { FilterComponent } from './containers/filter/filter.component';

const routes: Routes = [
  // { path: 'home', loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule), data: { preload : true} },
  // { path: '', loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule), data: { preload : true}  },
  { path: '', component : HomeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'awards', component : AwardComponent },
  { path: 'filter', component : FilterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadSelectedModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
