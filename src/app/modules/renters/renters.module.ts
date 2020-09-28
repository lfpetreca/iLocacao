import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { RentersRoutingModule } from './renters-routing.module';
import { RentersComponent } from './components/renters/renters.component';
import { RentersListComponent } from './components/renters-list/renters-list.component';
import { RentersDetailsComponent } from './components/renters-details/renters-details.component';
import { NewRentersComponent } from './components/new-renters/new-renters.component';
import { renterReducer } from './renters.reducer';

@NgModule({
  declarations: [
    RentersComponent,
    RentersListComponent,
    RentersDetailsComponent,
    NewRentersComponent
  ],
  imports: [
    SharedModule,
    RentersRoutingModule,
    StoreModule.forFeature('renters', renterReducer)
  ]
})
export class RentersModule { }
