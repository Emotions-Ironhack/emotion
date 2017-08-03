import { Component, OnInit } from '@angular/core';
import { FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-add-photo-emotion',
  templateUrl: './add-photo-emotion.component.html',
  styleUrls: ['./add-photo-emotion.component.css']
})
export class AddPhotoEmotionComponent implements OnInit {

  feedback : string;

  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/emotion/new'
  });

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

}

submit() {
  this.uploader.onBuildItemForm = (item, form) => {
    console.log("TO FLAMA");

  };
  this.uploader.uploadAll();
  console.log("TO FLAMA AL CUBO")
}

}
