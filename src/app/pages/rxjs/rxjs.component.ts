import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs! : Subscription;

  constructor() { 
    
    // this.retornaObservable().pipe(
    //   /* intenta realizar la de nuevo la funcion */
    //   retry(1)
    // ).subscribe(
    //   valor => console.log( 'subs : ', valor ),
    //   error => console.warn( 'subs :', error),
    //   () => console.info( 'observer termino :' )
        
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )

  }
  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval( 100 )
      .pipe(
        take(5),
        map( val =>  val+1 ),
        filter( val => ( val % 2 === 0 ) ? true : false),
      )
  }

  retornaObservable(): Observable<number>{
    let i = -1;
     return new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if( i === 4 ){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 2 ){
          observer.error( 'i es igual a 2' );
        }

      }, 1000 )

    });

    
  }

}
