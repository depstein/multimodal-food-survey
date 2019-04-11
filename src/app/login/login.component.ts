import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user:string;
	userValid:string;

  constructor(private userService:UserService, private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  logIn(loginForm:NgForm) {
  	if(!this.user) {
  		this.userValid = 'is-invalid';
  	}
  	//Try to log in
  	this.firebaseService.logIn(this.user).then((loggedIn) => {
		if(loggedIn) {
			this.userService.user = this.user;
  		} else {
  			this.userValid = 'is-invalid';
  		}
  	});
  }

}
