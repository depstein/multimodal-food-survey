import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Context } from '../context';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-food-record',
  templateUrl: './food-record.component.html',
  styleUrls: ['./food-record.component.css']
})
export class FoodRecordComponent implements OnInit {
	@Input() record:Object;
	context:Context = new Context();
	placeOther:string = undefined;
	otherPlacePicked:boolean = false;
	mealOther:string = undefined;
	otherMealPicked:boolean = false;
	situationValid:string;
	modalityValid:string;
	mealValid:string;
  timeValid:string;
	eatWithValid:string;
	placeValid:string;
	static readonly PLATFORM_MAP = {'web': 'the website', 'Alexa': 'Alexa', 'Google Home': 'Google Home', 'iPhone': 'the app', 'android': 'the app', 'watch': 'the watch'};
	static readonly MODALITY_MAP = {'foodImg': 'picture', 'barcodeImg': 'barcode', 'barcode': 'barcode', 'dbQuery': 'food database search', 'recipeURL': 'recipe link', 'foodDsrp': 'text description of the food', 'voice': 'voice description of the food'};

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  }

  pickPlace(other:boolean) {
  	this.otherPlacePicked = other;
  }

  pickMeal(other:boolean) {
  	this.otherMealPicked = other;
  }

  get recordString():string {
	let arr = Array.from(new Set(this.record['entries'].map((e => {return FoodRecordComponent.MODALITY_MAP[e.modality]}))));
	//Lots of checks for proper punctuation...
	let record = arr[0].toString();
	for(let i=1;i<arr.length;i++) {
		if(i<arr.length - 1) {
			record += ', ' + arr[i];
		} else if(arr.length == 2) {
			record += ' and ' + arr[i];
		} else {
			record += ', and ' + arr[i];
		}
	}
	return record;
  }

  get platformString():string {
  	return FoodRecordComponent.PLATFORM_MAP[this.record['platform']];
  }

  checkContext():boolean {
  	//TODO: this is ugly... if this gets more complex, consider putting these in the child component.
  	let completed = true;
  	if(this.context.meal) {
  		this.mealValid = 'is-valid';
  	} else {
  		this.mealValid = 'is-invalid';
  		completed = false;
  	}
    if(this.context.time) {
      this.timeValid = 'is-valid';
    } else {
      this.timeValid = 'is-invalid';
      completed = false;
    }
  	if(this.context.eatWith) {
  		this.eatWithValid = 'is-valid';
  	} else {
  		this.eatWithValid = 'is-invalid';
  		completed = false;
  	}
  	if(this.context.modality) {
  		this.modalityValid = 'is-valid';
  	} else {
  		this.modalityValid = 'is-invalid';
  		completed = false;
  	}
  	if(this.context.place) {
  		this.placeValid = 'is-valid';
  	} else {
  		this.placeValid = 'is-invalid';
  		completed = false;
  	}
  	if(this.context.situation) {
  		this.situationValid = 'is-valid';
  	} else {
  		this.situationValid = 'is-invalid';
  		completed = false;
  	}
  	return completed;
  }

  saveContext(form:NgForm) {
  	if(this.otherPlacePicked) {
  		this.context.place = this.placeOther;
  	}
  	if(this.otherMealPicked) {
  		this.context.meal = this.mealOther;
  	}
  	if(this.checkContext()) {
  		this.firebaseService.setContext(this.context, this.record['docId']);
  	}
  }
}
