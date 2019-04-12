import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-database-entry',
  templateUrl: './database-entry.component.html',
  styleUrls: ['./database-entry.component.css']
})
export class DatabaseEntryComponent implements OnInit {
	@Input() query:string;

  constructor() { }

  ngOnInit() {
  }

}
