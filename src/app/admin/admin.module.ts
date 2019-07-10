import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import {
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatListModule,
  MatFormFieldModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  MatInputModule,
  MatPaginatorModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AdminComponent } from "./admin.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ProductsComponent } from "./products/products.component";
import { AddProductsComponent } from "./products/add-products/add-products.component";
import { ShowProductsComponent } from "./products/show-products/show-products.component";
import { FormsModule } from "@angular/forms";
import { OrdersComponent } from './orders/orders.component';
import { RevenueComponent } from './revenue/revenue.component';
import { StatModule } from './../stat/stat.module';

@NgModule({
  declarations: [
    AdminComponent,
    TopbarComponent,
    SidebarComponent,
    ProductsComponent,
    AddProductsComponent,
    ShowProductsComponent,
    OrdersComponent,
    RevenueComponent
  ],
  imports: [
    CommonModule,
    StatModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,

    MatPaginatorModule,

    FlexLayoutModule.withConfig({ addFlexToParent: false }),
    MatSelectModule,
    AdminRoutingModule,
    DashboardModule
  ]
})
export class AdminModule {}
