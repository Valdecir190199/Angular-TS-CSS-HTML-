import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { Positivo_NegativoComponent } from './positivo_negativo/positivo_negativo.component';
import {IMCComponent} from './imc/imc.component';
import {CRUDComponent} from './crud/crud.component';
import { FormsModule } from '@angular/forms' ;



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcComponent,
    Positivo_NegativoComponent,
    IMCComponent,
    CRUDComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {


}
