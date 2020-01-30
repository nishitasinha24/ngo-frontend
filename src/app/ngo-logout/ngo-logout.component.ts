import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-logout',
  templateUrl: './ngo-logout.component.html',
  styleUrls: ['./ngo-logout.component.css']
})
export class NgoLogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    sessionStorage.removeItem('ngoid');
    this.router.navigate(['/home']);
  }

}
