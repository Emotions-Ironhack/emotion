import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import { SessionService } from '../../services/session.service';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = `${environment.BASE_URL}/api/emotion/new`;

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
  constructor(public router: Router, public session: SessionService) { }

  ngOnInit() { }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      console.log('item form',item, form);
      form.append('userRef', this.session.user._id);

    };
    console.log('seession user',this.session.user._id);
    this.uploader.uploadAll();
  }




  // submit() {
  //   this.uploader.uploadAll();
  // }

}
