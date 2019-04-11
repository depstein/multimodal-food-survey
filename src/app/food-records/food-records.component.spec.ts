import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordsComponent } from './food-records.component';

describe('FoodRecordsComponent', () => {
  let component: FoodRecordsComponent;
  let fixture: ComponentFixture<FoodRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
