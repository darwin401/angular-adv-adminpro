import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

// import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DashBoardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  exports: [
    DashBoardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    // AppRoutingModule
  ]
})
export class PagesModule { }
