import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { OcrService } from '../ocr.service';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-ocrbywebcam',
  templateUrl: './ocrbywebcam.component.html',
  styleUrls: ['./ocrbywebcam.component.scss']
})
export class OcrbywebcamComponent implements OnInit {
  image: string = null;
  text: string;
  status: string;
  confidence;

  public showWebcam = true;
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.recognize(webcamImage.imageAsDataUrl);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  recognize(img) {
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


}
