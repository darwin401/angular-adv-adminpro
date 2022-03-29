import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu:[
        { title:'Main', url:'/' },
        { title:'Grafics', url:'grafica1' },
        { title:'ProgressBar', url:'progress' },
        { title:'Promesas', url:'promesas' },
        { title:'RxJs', url:'rxjs' },
      ]
    }
  ]

  constructor() { }
}
