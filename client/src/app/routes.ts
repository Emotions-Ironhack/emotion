import { Routes } from '@angular/router';

import { AddPhotoEmotionComponent } from './add-photo-emotion/add-photo-emotion.component';
import { EmotionListComponent } from './emotion-list/emotion-list.component';

export const routes: Routes = [
    { path: '', component: EmotionListComponent },
    { path: 'new', component: AddPhotoEmotionComponent },
    { path: '**', redirectTo: '' }
];
