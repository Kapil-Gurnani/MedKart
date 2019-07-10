import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token') == 'vendor') this.router.navigate(['admin/dashboard']);
    if(localStorage.getItem('token') == 'admin') this.router.navigate(['admin/dashboard']);
    if(localStorage.getItem('token') == 'user') this.router.navigate(['user']);
    // if(localStorage.getItem('token')) this.router.navigate(['admin/dashboard']);
  }


}
