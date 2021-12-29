import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {path:'', component:ServicesComponent},
  //{path:'home', component:HomeComponent},
  //{path:'whoweare', component:WhoWeAreComponent},
  //{path:'industries', component:IndustriesComponent},
  {path:'services', component:ServicesComponent},
  //{path:'careers', component:CareersComponent},
  //{path:'blog', component:BlogComponent},
  //{path:'contactus', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
