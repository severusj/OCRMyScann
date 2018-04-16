import { Component, OnInit } from '@angular/core';

import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent implements OnInit {
  myimage = './assets/img/teste.png';
  mytext: any = 'loading';
  myconfidence: any;
  mywords: any[] = [];
  myblocks: any[] = [];
  mylines;
  myhtml;
  myoem;
  myparagraphs;
  mypsm;
  mysymbols;
  myversion;

  constructor() { }

  ngOnInit() {
    this.recognize();
  }

  recognize() {
    Tesseract.recognize(this.myimage)
      .progress(message => console.log(message))
      .catch(err => console.log(err))
      .then((value) => {
        this.mytext = value.text;
        this.myconfidence = value.confidence;
        this.mywords = value.words;
        this.myblocks = value.blocks;
        this.mylines = value.lines;
        this.myhtml = value.html;
        this.myoem = value.oem;
        this.myparagraphs = value.paragraphs;
        this.mypsm = value.psm;
        this.mysymbols = value.symbols;
        this.myversion = value.version;
      }
      )
      .finally(resultOrError => console.log(resultOrError));
    console.log(this.mytext);
  }

}
