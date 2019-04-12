import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionEntryComponent } from './description-entry.component';

describe('DescriptionEntryComponent', () => {
  let component: DescriptionEntryComponent;
  let fixture: ComponentFixture<DescriptionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
