import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { StudiesComponent } from './studies/studies.component';
import { CoursesComponent } from './courses/courses.component';
import { HobbyComponent } from './hobby/hobby.component';
import { CommentsComponent } from './comments/comments.component';
import { PnfComponent } from './pnf/pnf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CareerComponent,
    AboutComponent,
    StudiesComponent,
    CoursesComponent,
    HobbyComponent,
    CommentsComponent,
    PnfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
