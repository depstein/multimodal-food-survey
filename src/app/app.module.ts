import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { FoodRecordsComponent } from './food-records/food-records.component';
import { ImageEntryComponent } from './image-entry/image-entry.component';
import { BarcodeEntryComponent } from './barcode-entry/barcode-entry.component';
import { DescriptionEntryComponent } from './description-entry/description-entry.component';
import { RecipeEntryComponent } from './recipe-entry/recipe-entry.component';
import { DatabaseEntryComponent } from './database-entry/database-entry.component';
import { VoiceEntryComponent } from './voice-entry/voice-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    FoodRecordsComponent,
    ImageEntryComponent,
    BarcodeEntryComponent,
    DescriptionEntryComponent,
    RecipeEntryComponent,
    DatabaseEntryComponent,
    VoiceEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    WebStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
