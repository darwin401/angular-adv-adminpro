import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios()
      .then( usuarios => {console.log( usuarios )})

/* Promesa basica

    const promesa = new Promise( ( resolve, reject ) => {
      if(false){
        resolve('Hola mundo');
      }else{
        reject('paila cucho')
      }
    });

    promesa.then( ( mensaje ) => {
      console.log(mensaje);
    })
    .catch( err => console.log(' error ',err ) )
 */   
}

getUsuarios(){

  // return new Promise( resolve => {
  const promesa = new Promise( resolve => {

    fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve( body.data ) )

  });

  return promesa;


}

}
