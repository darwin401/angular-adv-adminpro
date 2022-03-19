import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [

    { 
        path:'dashboard',
        component: PagesComponent,
        children:[
            { path:'', component: DashBoardComponent},
            { path:'progress', component: ProgressComponent},
            { path:'grafica1', component: Grafica1Component},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
