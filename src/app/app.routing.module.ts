/**
 * app routing definitions
 */

import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const ROUTES: Route[] = [
    {
        path: '',
        children: [
            
            /**
             * onboarding component
             */
            {
                path: 'onboarding',
                component: OnboardingComponent
            },

            /**
             * lazy load the dashboard
             */
            {
                path: 'dashboard',
                loadChildren: () => import('../../projects/dashboard/src/lib/dashboard.module').then(m => m.DashboardModule)
            },

            /**
             * when in root re-direct to onboarding
             */
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'onboarding'
            }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

/**
 * app routing module
 */
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(ROUTES)
    ]
})
export class AppRoutingModule {}
