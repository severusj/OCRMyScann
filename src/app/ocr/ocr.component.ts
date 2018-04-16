import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent implements OnInit {
  modeImage = true;
  modeCam = false;
  image: string = null;
  text: string;
  status: string;
  confidence;

  constructor(private ocrService: OcrService) { }

  ngOnInit() { }

  toggleMode() {
    this.modeImage = !this.modeImage;
    this.modeCam = !this.modeCam;
  }
}
