import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-logout',
  templateUrl: './parent-logout.component.html',
  styleUrls: ['./parent-logout.component.css']
})
export class ParentLogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    sessionStorage.removeItem('parent');
    this.router.navigate(['/home']);
  }

}
