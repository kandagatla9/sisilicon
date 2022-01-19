import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { GetAllBlogsService } from './blogServices/Blogs.service';
import { FormsModule } from '@angular/forms';
import { ContentBlogComponent } from './content-blog/content-blog.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ViewBlogComponent, ContentBlogComponent],
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule,
    RouterModule
  ],
  providers: [GetAllBlogsService, FooterComponent]
  
})
export class BlogModule { }
