import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopHeadlinesPage } from './top-headlines';

@NgModule({
  declarations: [
    TopHeadlinesPage,
  ],
  imports: [
    IonicPageModule.forChild(TopHeadlinesPage),
  ],
})
export class TopHeadlinesPageModule {}
