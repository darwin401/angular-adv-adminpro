import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels1 : string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  data1 = [ 10, 250, 320 ];
  labels2 : string[] = [ 'Empanadas', 'Cosas ', 'Gaseosa' ];
  data2 = [ 100, 450, 220 ];
  labels3 : string[] = [ 'Tacos', 'Guaro', 'Chuchi' ];
  data3 = [ 99, 254, 389 ];
  labels4 : string[] = [ 'Morcilla', 'Buñuelos', 'Tamales' ];
  data4 = [ 450, 122, 222 ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
