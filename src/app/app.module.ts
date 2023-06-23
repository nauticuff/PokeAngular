import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeNavComponent } from './components/poke-nav/poke-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
@NgModule({
  declarations: [
    AppComponent,
    PokeNavComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
