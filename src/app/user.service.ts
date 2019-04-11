import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { generate } from 'shortid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //uid is used in the sticker survey, so we need a different string... this feels like it shouldn't happen. Maybe it won't when these are in different domains.
	@LocalStorage() user:string;

  constructor() {
  }

  reset() {
  }
}
