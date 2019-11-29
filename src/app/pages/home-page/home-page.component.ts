import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  role= localStorage.getItem('role')

  ngOnInit() {
  }

  isAdmin() {
    if(this.role === 'admin') {
      return true
    }
    return false
  }

  toAdminPage() {
    this.router.navigate(['admin']);
  }
}
