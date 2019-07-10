import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/backend-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  name: String;
  quantity: Number;
  description: String;
  price: Number;
  category: String;
  imageLink: String;
  size: String;
  details: any;

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
  }
  addProduct() {
    let productDetails = {
      name: this.name,
      quantity: this.quantity,
      description: this.description,
      price: this.price,
      category: this.category,
      imageLink: 'https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/gz9oedclkx2xwjhjdqng.jpg',
      size: this.size,
      vendor: localStorage.getItem('email')
    }
    // this.details = productDetails;
    this.service.addProduct(productDetails).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

}
