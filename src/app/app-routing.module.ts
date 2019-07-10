import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { VendorComponent } from "./vendor/vendor.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: HomeComponent },
  // { path: "admin", component: AdminComponent },
  // { path: "vendor", component: VendorComponent },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
    // canActivate: [AuthGuard]
  },{
    path: "vendor",
    loadChildren: "./admin/admin.module#AdminModule"
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
