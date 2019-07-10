import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { BackendServiceService } from 'src/app/backend-service.service';

@Component({
  selector: "app-show-products",
  templateUrl: "./show-products.component.html",
  styleUrls: ["./show-products.component.scss"]
})
export class ShowProductsComponent implements OnInit {
  displayedColumns = [
    "id",
    "name",
    "description",
    "quantity",
    "price",
    "category",
    "image"
  ];
  dataSource: MatTableDataSource<ProductData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: BackendServiceService) {
    // Create 100 products
    const products: ProductData[] = [];
    // for (let i = 1; i <= 100; i++) {
    //   products.push(createNewUser(i));
    // }

    this.service.showProduct().subscribe(data => {
      console.log(JSON.parse(JSON.stringify(data)).length);
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        // JSON.parse(JSON.stringify(data))[i]['id'] = i;
        products.push(JSON.parse(JSON.stringify(data))[i]);
        products[i].id = (i + 1).toString();
        // console.log(products[0]);
        this.ngOnInit();
      }
    }, error => console.log(error));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(products);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Constants used to fill up our data base. */
const COLORS = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray"
];
const NAMES = [
  "Maia",
  "Asher",
  "Olivia",
  "Atticus",
  "Amelia",
  "Jack",
  "Charlotte",
  "Theodore",
  "Isla",
  "Oliver",
  "Isabella",
  "Jasper",
  "Cora",
  "Levi",
  "Violet",
  "Arthur",
  "Mia",
  "Thomas",
  "Elizabeth"
];

export interface ProductData {
  id: string;
  name: string;
  description: string;
  quantity: string;
  price: string;
  category: string;
  imageLink: string;
  vendor: string;
}
