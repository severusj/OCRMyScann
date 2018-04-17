import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';
import { Observable } from 'rxjs/Observable';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-ocrbyimage',
  templateUrl: './ocrbyimage.component.html',
  styleUrls: ['./ocrbyimage.component.scss']
})
export class OcrbyimageComponent implements OnInit {
  image: string = null;
  text: string;
  status: string;
  confidence;

  constructor() { }

  ngOnInit() {
  }

  recognize(img: string) {
    Tesseract.recognize(img)
      .progress((progress) => {
        this.confidence = progress.progress;
        this.status = progress.status;
      })
      .catch(err => console.log(err))
      .then((value) => {
        this.text = value.text;
        this.confidence = value.confidence;
      })
      .finally(resultOrError => console.log(resultOrError));
  }

  onFileSelected(event) {
    this.image = event.target.files[0];
    console.log(event.target.files[0]);
  }

  onUpload() {
    this.recognize(this.image);
  }

}
