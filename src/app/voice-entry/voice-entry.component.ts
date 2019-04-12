import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voice-entry',
  templateUrl: './voice-entry.component.html',
  styleUrls: ['./voice-entry.component.css']
})
export class VoiceEntryComponent implements OnInit {
	@Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
