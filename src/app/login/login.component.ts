import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";

import { BackendServiceService } from "./../backend-service.service";
import * as CryptoJS from "crypto-js";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  conversionEncryptOutput: string;
  constructor(private router: Router, private service: BackendServiceService) {}

  ngOnInit() {
    if(localStorage.getItem('token') == 'vendor') this.router.navigate(['admin/dashboard']);
    if(localStorage.getItem('token') == 'admin') this.router.navigate(['admin/dashboard']);
    if(localStorage.getItem('token') == 'user') this.router.navigate(['user']);
  }
  login(): void {
    let password = this.password;
    this.conversionEncryptOutput = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      "Kapil"
    );
    console.log(this.conversionEncryptOutput.toString());
    let credentials = {
      loginEmail: this.username,
      loginPassword: this.conversionEncryptOutput.toString()
    };
    this.service.login(credentials).subscribe(data => {
      console.log(data);
      if (JSON.parse(JSON.stringify(data)).result) {
        console.log(JSON.parse(JSON.stringify(data)).role);
        if (JSON.parse(JSON.stringify(data)).role == "vendor") {
          localStorage.setItem("isLoggedIn", "true");
          // console.log(JSON.parse(JSON.stringify(data)));
          localStorage.setItem("email",this.username);
          localStorage.setItem("token", JSON.parse(JSON.stringify(data)).role);
          this.router.navigate(["admin"]);
        }
        // this.router.navigate([JSON.parse(JSON.stringify(data)).role]);
      } else {
        console.log("Invalid Credentials");
      }
    });
  }
}
