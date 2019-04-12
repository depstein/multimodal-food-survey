import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barcode-entry',
  templateUrl: './barcode-entry.component.html',
  styleUrls: ['./barcode-entry.component.css']
})
export class BarcodeEntryComponent implements OnInit {
	@Input() barcode:string;

  constructor() { }

  ngOnInit() {
  }

}
