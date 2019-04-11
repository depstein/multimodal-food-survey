import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-food-records',
  templateUrl: './food-records.component.html',
  styleUrls: ['./food-records.component.css']
})
export class FoodRecordsComponent implements OnInit {

  constructor(private userService:UserService, private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  logOut() {
  	this.userService.user = undefined;
  }

}
