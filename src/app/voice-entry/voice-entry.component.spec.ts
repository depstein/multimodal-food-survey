import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceEntryComponent } from './voice-entry.component';

describe('VoiceEntryComponent', () => {
  let component: VoiceEntryComponent;
  let fixture: ComponentFixture<VoiceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
