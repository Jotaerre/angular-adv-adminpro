import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuario().then( usuarios => {
      console.log(usuarios);
    });

    /* const promesa = new Promise( ( resolve, reject ) => {

      if(false){
        resolve('Hola Mundo');
      }else{
        reject('Algo salió mal');
      }


    });

    promesa.then( ( mensaje ) => {
      console.log( mensaje );
    } )
    .catch( error => console.log('Error en mi promesa', error) );
    console.log('Fin del Init'); */

  }

  getUsuario(){

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) );
      });

      return promesa;


  }

}
