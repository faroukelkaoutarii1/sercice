import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favoo',
  templateUrl: './favoo.component.html',
  styleUrls: ['./favoo.component.css']
})
export class FavooComponent implements OnInit {

  constructor() { }


  isauth : boolean = false;


  ngOnInit(): void {
  }

}
