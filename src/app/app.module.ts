import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { AppComponent } from './app.component';
import { OcrComponent } from './ocr/ocr.component';
import { OcrbywebcamComponent } from './ocrbywebcam/ocrbywebcam.component';
import { OcrbyimageComponent } from './ocrbyimage/ocrbyimage.component';
import { OcrService } from './ocr.service';

@NgModule({
  declarations: [
    AppComponent,
    OcrComponent,
    OcrbywebcamComponent,
    OcrbyimageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebcamModule,
    
  ],
  providers: [OcrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
