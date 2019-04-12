import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-image-entry',
  templateUrl: './image-entry.component.html',
  styleUrls: ['./image-entry.component.css']
})
export class ImageEntryComponent implements OnInit {
	@Input() url:string;
	private image:Observable<string | null>;

  constructor(private firebaseService:FirebaseService) {

  }

  ngOnInit() {
  	this.image = this.firebaseService.getImage(this.url);
  }

}
