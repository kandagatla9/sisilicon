import { Component, OnInit } from '@angular/core';
import { GetAllBlogsService } from './../blogServices/Blogs.service';
import { Blog } from './../model/blog';
@Component({
  selector: 'app-content-blog',
  templateUrl: './content-blog.component.html',
  styleUrls: ['./content-blog.component.scss']
})
export class ContentBlogComponent implements OnInit {
  blogList: Blog[] = [{_id:"", message:"", title:"", department:""}];
  title:any
  constructor(private getAllBlogs: GetAllBlogsService) { }

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
