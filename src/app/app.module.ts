import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { VisTimelineComponent } from './vis-timeline/vis-timeline.component';

@NgModule({
  declarations: [AppComponent, ItemDetailsComponent, VisTimelineComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
