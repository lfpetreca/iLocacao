import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/services/auth.service';
import { UIService } from '../shared/services/ui.service';

import { HeaderComponent } from '../shared/components/header/header.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CoreRoutingModule,
    SharedModule,
    AuthModule,
  ],
  providers: [
    AuthService,
    UIService
  ]
})
export class CoreModule { }
