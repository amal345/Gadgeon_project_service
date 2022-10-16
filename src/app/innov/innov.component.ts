import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innov',
  templateUrl: './innov.component.html',
  styleUrls: ['./innov.component.css']
})
export class InnovComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 hello=()=>
{
 alert("hello")
}
}

