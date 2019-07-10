import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  sub: any;
  id: any;
  page: any;
  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      // console.log(params.page);
      this.page = params.page;
    });
    // console.log(this.page);
  }

  addproducts() {
    // this.sub = this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      // console.log(params.page);
      if(this.page == 'add') return true;
      // this.page = +params["page"] || 0;
    // });
    // console.log();
    // return true;
  }

  showproducts() {
    // this.sub = this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      // console.log(params.page);
      if(this.page == 'show') return true;
      // this.page = +params["page"] || 0;
    // });
    // console.log();
    // return true;
  }
}
