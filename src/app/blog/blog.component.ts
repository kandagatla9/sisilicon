import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { GetAllBlogsService } from './blogServices/Blogs.service';
import { Blog } from './model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList: Blog[] = [{_id:"", message:"", title:"", department:""}];
  title:any
  constructor(private getAllBlogs: GetAllBlogsService ) { }

  ngOnInit(){
    const promise = this.getAllBlogs.getAllBlogs();
    promise.then(
      (response:any) => {
        this.blogList =response["res"];
        console.log(this.blogList)
      },
        error => {
          console.log("error" +error)
        }
    );
  }



}
