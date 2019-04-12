import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-entry',
  templateUrl: './description-entry.component.html',
  styleUrls: ['./description-entry.component.css']
})
export class DescriptionEntryComponent implements OnInit {
	@Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
