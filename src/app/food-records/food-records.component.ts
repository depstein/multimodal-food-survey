import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FirebaseService } from '../firebase.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-food-records',
  templateUrl: './food-records.component.html',
  styleUrls: ['./food-records.component.css']
})
export class FoodRecordsComponent implements OnInit {
	records:Observable<Object>;

  constructor(private userService:UserService, private firebaseService:FirebaseService) { }

  ngOnInit() {
  	if(!this.firebaseService.isLoggedIn) {
  		this.firebaseService.logIn(this.userService.user).then((loggedIn => {
  			if(!loggedIn) {
  				console.error('Something went wrong... ' + this.userService.user + ' not logged in.');
  			} else {
  				this.loadRecords();
  			}
  		}));
  	} else {
  		this.loadRecords();
  	}
  }

  loadRecords() {
  	this.records = this.firebaseService.MissingRecords;
  }

  logOut() {
  	this.userService.user = undefined;
  	this.firebaseService.logOut();
  }

}
