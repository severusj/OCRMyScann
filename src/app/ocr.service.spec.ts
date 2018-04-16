import { TestBed, inject } from '@angular/core/testing';

import { OcrService } from './ocr.service';

describe('OcrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcrService]
    });
  });

  it('should be created', inject([OcrService], (service: OcrService) => {
    expect(service).toBeTruthy();
  }));
});
