import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { PartnersComponent } from './partners/partners.component';
import { PrincipesComponent } from './principes/principes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':slug', component: PartnersComponent },
  { path: 'informatie/info', component: InformationComponent },
  { path: ':slug/:url', component: PrincipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
