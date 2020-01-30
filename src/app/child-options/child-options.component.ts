import { Component, OnInit } from '@angular/core';
import { Children} from '../model/Children'

@Component({
  selector: 'app-child-options',
  templateUrl: './child-options.component.html',
  styleUrls: ['./child-options.component.css']
})
export class ChildOptionsComponent implements OnInit {

  constructor() {
    console.log("ngo options!!!!!!!!!!");
   }

  ngOnInit() {
  }

}
