import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: [
  ]
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {

  titulo: string = '';
  tituloSub$!: Subscription;

  constructor( private router: Router ) {
  }

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  ngOnInit(): void {
    this.tituloSub$ = this.getArgsRoutes()
      .subscribe( ({titulo}) =>{
        this.titulo = titulo;
        document.title = `AdminPro - ${ titulo }`;
      });
  }

  getArgsRoutes(){
        
    return this.router.events
      .pipe(
        filter( (event): event is ActivationEnd => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
        map( (event: ActivationEnd) => event.snapshot.data )  
      )
  }

}
