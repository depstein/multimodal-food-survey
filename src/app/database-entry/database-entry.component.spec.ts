import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseEntryComponent } from './database-entry.component';

describe('DatabaseEntryComponent', () => {
  let component: DatabaseEntryComponent;
  let fixture: ComponentFixture<DatabaseEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
