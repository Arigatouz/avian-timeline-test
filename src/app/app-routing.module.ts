import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { VisTimelineComponent } from './vis-timeline/vis-timeline.component';

const routes: Routes = [
  { path: 'details', component: ItemDetailsComponent },
  { path: 'timeline', component: VisTimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
