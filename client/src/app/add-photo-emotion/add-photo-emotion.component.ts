import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = `${environment.BASE_URL}/api/emotion/`;

@Component({
  selector: 'app-add-photo-emotion',
  templateUrl: './add-photo-emotion.component.html',
  styleUrls: ['./add-photo-emotion.component.css']
})
export class AddPhotoEmotionComponent implements OnInit {
  newImage = {
    name: ''
  };
  feedback: string;

  public uploader: FileUploader = new FileUploader({
    url: URL
  });
  constructor(public router: Router) { }

  ngOnInit() {
  }

  // submit() {
  //   this.uploader.uploadAll();
  // }

}
