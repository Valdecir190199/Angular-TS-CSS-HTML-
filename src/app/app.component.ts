import { Component } from '@angular/core';
import { Estado } from './entidades/estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  listaEstado = new Array<Estado>();
  estado : Estado = new Estado();

    adicionar() : void {
      this.listaEstado.push(this.estado);
      this.estado = new Estado();
    }

    excluir (i:number) : void {
      this.listaEstado.splice(i,1);
    }

    alterar(i:number) : void {
      this.estado = this.listaEstado[i];
      this.listaEstado.splice(i,1);
    }



}
