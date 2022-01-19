import { Injectable } from "@angular/core";
import { blogList } from "../blogsData/data";
import { Blog } from "../model/blog";

@Injectable()
export class GetAllBlogsService {
    blog!: any;
    blogList: Blog[] = blogList;
    constructor() {}

    getAllBlogs(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
               const data = { res: this.blogList};
               resolve(data); 
            }, 0);
        });
    }

    getBlogByGivenId(id:string){
        this.blog = this.blogList.find(bl => bl._id === id);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.blog);
            }, 0);
        })
    }
}