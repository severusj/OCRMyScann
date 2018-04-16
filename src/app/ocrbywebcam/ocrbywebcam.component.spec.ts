import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrbywebcamComponent } from './ocrbywebcam.component';

describe('OcrbywebcamComponent', () => {
  let component: OcrbywebcamComponent;
  let fixture: ComponentFixture<OcrbywebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrbywebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrbywebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
