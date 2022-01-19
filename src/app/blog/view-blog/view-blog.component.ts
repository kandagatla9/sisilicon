import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAllBlogsService } from '../blogServices/Blogs.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  ID:any;
  xyz:any;
  constructor(private actRoute:ActivatedRoute, private get:GetAllBlogsService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.ID = id;
    console.log(this.ID)
    const promise = this.get.getBlogByGivenId(id);
    
    promise.then(
      (response:any) => {
        const abc = response["title"]
        this.xyz = response["title"]
      }
    )
  }

}
