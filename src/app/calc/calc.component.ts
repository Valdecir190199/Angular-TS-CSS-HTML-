import {Component} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent  {

n1: number;
n2: number;

somar(): void{

  alert('Resultado'+" "+((this.n1)+(this.n2)));

}

subtrair(): void{
    alert('Resultado'+" "+((this.n1)-(this.n2)));
}

dividir(): void{
    alert('Resultado'+" "+((this.n1)/(this.n2)));
}

multiplicar(): void{
    alert('Resultado'+" "+((this.n1)*(this.n2)));
}

}
