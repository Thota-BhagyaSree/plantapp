import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantReviewComponent } from './plant-review/plant-review.component';
import { PlanterReviewComponent } from './planter-review/planter-review.component';

const allLinks:Routes=[
  {path:'plant-review',component:PlantReviewComponent},
  {path:'planter-review',component:PlanterReviewComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    PlantReviewComponent,
    PlanterReviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
