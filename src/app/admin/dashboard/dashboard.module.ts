import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { MatGridListModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatModule } from './../../stat/stat.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { StatComponent } from 'src/app/stat/stat.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    StatModule,
    MatCardModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
