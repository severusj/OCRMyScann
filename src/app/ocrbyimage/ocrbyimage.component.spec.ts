import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrbyimageComponent } from './ocrbyimage.component';

describe('OcrbyimageComponent', () => {
  let component: OcrbyimageComponent;
  let fixture: ComponentFixture<OcrbyimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrbyimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrbyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
