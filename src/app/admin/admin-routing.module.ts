import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AddProductsComponent } from "./products/add-products/add-products.component";
import { ShowProductsComponent } from "./products/show-products/show-products.component";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";
import { RevenueComponent } from "./revenue/revenue.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent
        // loadChildren: "./../admin/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "product",
        component: ProductsComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "revenue",
        component: RevenueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
