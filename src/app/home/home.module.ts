import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatModule } from "../stat/stat.module";
import { HomeComponent } from "./home.component";
import { CategoryComponent } from "./category/category.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SaleComponent } from "./sale/sale.component";
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { VendorComponent } from "../vendor/vendor.component";
import { NguCarouselModule } from "@ngu/carousel";
import { SlideshowModule } from "ng-simple-slideshow";

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
import { SidebarComponent } from '../admin/components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VendorsComponent } from './vendors/vendors.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
    SaleComponent,
    SlideshowComponent,
    VendorsComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    SlideshowModule,
    StatModule,
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
    MatListModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),
  ]
})
export class HomeModule {}
