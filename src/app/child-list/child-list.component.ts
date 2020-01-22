import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Children } from '../model/children';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  child: Children[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllChildren();
  }

  public getAllChildren(){
      this.http.get<Children[]>("http://localhost:8095/childlist").subscribe(
        res => {
          this.child = res;
        },
        err => {
          alert("An error has occured;")
        }
      );
  }
}
