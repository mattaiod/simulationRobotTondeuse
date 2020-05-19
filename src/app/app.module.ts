import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FichierInitialisationComponent } from './core/fichier-initialisation/fichier-initialisation.component';


@NgModule({
  declarations: [
    AppComponent,
    FichierInitialisationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
