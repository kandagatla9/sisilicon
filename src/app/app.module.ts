import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component'; 
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    WhoWeAreComponent,
    IndustriesComponent,
    ServicesComponent,
    CareersComponent,
    ContactUsComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  exports:[FooterComponent]
})
export class AppModule { }
