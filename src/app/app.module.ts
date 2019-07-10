import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { BackendServiceService } from "./backend-service.service";

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatListModule
} from "@angular/material";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { VendorComponent } from "./vendor/vendor.component";
import { SlideshowComponent } from "./home/slideshow/slideshow.component";
import { SaleDesignComponent } from "./home/sale-design/sale-design.component";
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './home/category/category.component';
import { SaleComponent } from './home/sale/sale.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [BackendServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
