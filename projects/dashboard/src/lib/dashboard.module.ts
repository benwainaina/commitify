import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { IDashboardModuleFeatureKey } from './state-manager/interfaces';
import { reducers } from './state-manager/reducers';


const DASHBOARD_EFFECTS: any = [];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    /**
     * dashboard routes
     */
     DashboardRoutingModule,

    /**
     * NGRX module configurations for dashboard library (feature module)
     */
    StoreModule.forFeature(IDashboardModuleFeatureKey, reducers),
    EffectsModule.forFeature(DASHBOARD_EFFECTS)
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
