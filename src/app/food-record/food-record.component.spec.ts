import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordComponent } from './food-record.component';

describe('FoodRecordComponent', () => {
  let component: FoodRecordComponent;
  let fixture: ComponentFixture<FoodRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
