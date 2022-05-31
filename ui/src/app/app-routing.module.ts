import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { AboutComponent} from './about/about.component';
import { CareerComponent} from './career/career.component';
import { StudiesComponent} from './studies/studies.component';
import { CoursesComponent} from './courses/courses.component';
import { HobbyComponent} from './hobby/hobby.component';
import { ContactComponent} from './contact/contact.component';
import { CommentsComponent} from './comments/comments.component';
import { PnfComponent} from './pnf/pnf.component';

const routes: Routes = [
{path: '', redirectTo: '/about', pathMatch: 'full'},
{path: 'about', component:AboutComponent},
{path: 'career', component:CareerComponent},
{path: 'edu/studies', component:StudiesComponent},
{path: 'edu/courses', component:CoursesComponent},
{path: 'hobby', component:HobbyComponent},
{path: 'contact', component:ContactComponent},
{path: 'comments', component:CommentsComponent},
{ path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
