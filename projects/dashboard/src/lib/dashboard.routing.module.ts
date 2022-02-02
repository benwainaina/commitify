/**
 * dashboard routes definitions
 */

import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const ROUTES: Route[] = [
    {
        path: '',
        component: DashboardComponent
    }
];

/**
 * dashboard routing module
 */
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class DashboardRoutingModule {}
