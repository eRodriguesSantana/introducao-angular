import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente-component';
import { MeuComponente2Component } from './meu-componente2/meu-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    MeuComponente2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

