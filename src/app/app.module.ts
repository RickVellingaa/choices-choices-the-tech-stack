import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { PartnersComponent } from './partners/partners.component';
import { HeadingComponent } from './heading/heading.component';
import { JsonFormatPipe } from './json-format.pipe';
import { PrincipesComponent } from './principes/principes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InformationComponent,
    PartnersComponent,
    HeadingComponent,
    JsonFormatPipe,
    PrincipesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
