import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 title="Alappuzha";
 today=Date();

 user= {
  id:1001,
  name:"Amal Ashok",
  dob:'07/05/1999',
  salary:'25000'
 }
}
