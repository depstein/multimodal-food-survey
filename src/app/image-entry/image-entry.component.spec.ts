import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEntryComponent } from './image-entry.component';

describe('ImageEntryComponent', () => {
  let component: ImageEntryComponent;
  let fixture: ComponentFixture<ImageEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
