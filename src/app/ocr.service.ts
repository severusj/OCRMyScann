import { Injectable } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OcrService {
  public text;
  status: string;
  confidence;

  constructor() { }

  recognize(img: string): Observable<any> {
    Tesseract.recognize(img)
      .progress((progress) => {
        this.confidence = progress.progress;
        this.status = progress.status;
      })
      .catch(err => console.log(err))
      .then((value) => {
        this.setText(value.text);
        this.confidence = value.confidence;
      })
      .finally(resultOrError => console.log(resultOrError));

    return this.getText();
  }

  getText() {
    return this.text;
  }
  setText(text) {
    this.text = text;
  }
  getStatus() {
    return this.status;
  }
  getConfidence() {
    return this.confidence;
  }

}
