import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from './../backend-service.service';
import { Router } from '@angular/router';



export interface dropDown {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  cities: dropDown[] = [
    { value: 'kanpur', viewValue: 'Kanpur' },
    { value: 'lucknow', viewValue: 'Lucknow' }
  ];
  states: dropDown[] = [
    { value: 'up', viewValue: 'UP' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'gujarat', viewValue: 'Gujarat' }
  ];
  roles: dropDown[] = [
    { value: 'user', viewValue: 'Customer' },
    { value: 'vendor', viewValue: 'Seller' }
  ];


  dropDownCities: string;
  dropDownStates: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: number;
  phone: number;
  role: string;
  disabled: boolean;
  validationSuccess: boolean;
  errorMessage: string;

  constructor(private router: Router, private service: BackendServiceService) { }

  ngOnInit() {
    if(localStorage.getItem('token') == 'vendor') this.router.navigate(['admin/dashboard']);
    if(localStorage.getItem('token') == 'admin') this.router.navigate(['admin/dashboard']);
    if(localStorage.getItem('token') == 'user') this.router.navigate(['user']);
  }
  register() {
    if (this.username && this.password && this.email && this.address && this.city && this.state && this.pincode && this.phone && this.role) {
      this.validationSuccess = false;
      if (this.emailValidation()) {
        this.validationSuccess = true;
        this.errorMessage = "Email is not valid";
        return;
      }
      if(this.pincode.toString().length != 6){
        this.validationSuccess = true;
        this.errorMessage = "pincode length must be 6 digits";
        return;
      }
      if(this.phone.toString().length != 10){
        this.validationSuccess = true;
        this.errorMessage = "pincode  length must be 10 digits";
        return;
      }
      let registerData = {
        registerUsername: this.username,
        registerPassword: this.password,
        registerEmail: this.email,
        registerAddress: this.address,
        registerCity: this.city,
        registerState: this.state,
        registerPincode: this.pincode,
        registerPhone: this.phone,
        registerRole: this.role
      }
      this.service.register(registerData).subscribe(data => {
        console.log(data);
        if (JSON.parse(JSON.stringify(data)).result) this.router.navigate([this.role]);
        else console.log(JSON.parse(JSON.stringify(data)));
      }, error => console.log(error));
    } else {
      this.validationSuccess = true;
      this.errorMessage = "All fields are required";
    }
  }
  confirmPass(): boolean {
    if (this.confirmPassword)
      if (this.password != this.confirmPassword) return true;
      else return false;
  }
  emailValidation(): boolean {
    if (this.email)
      if (this.email.indexOf('@') > 0 && this.email.substring(this.email.indexOf('@')).indexOf('.') > 0 && this.email.substring(this.email.indexOf('@') + 1, this.email.indexOf('.')).length) return false;
      else return true;
  }
  check() {
    this.service.getData('/read').subscribe((data) => { console.log(data) });
  }

}
