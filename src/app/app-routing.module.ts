import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalcComponent} from './calc/calc.component';
import {Positivo_NegativoComponent} from './positivo_negativo/positivo_negativo.component';
import {IMCComponent} from './imc/imc.component';
import {CRUDComponent} from './crud/crud.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'calc', component: CalcComponent},
{path:'ps', component: Positivo_NegativoComponent},
{path:'imc', component: IMCComponent},
{path: 'crud', component: CRUDComponent}




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
