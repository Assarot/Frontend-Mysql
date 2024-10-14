import { Component } from '@angular/core';
import { Post } from '../models/post';
import { postService } from '../services/post.service';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, TableModule, ButtonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: Post[] = [];
  constructor(private postService: postService) {}
  ngOnInit(): void {
    this.listaPosts();
  }
  listaPosts() {
    this.postService.getposts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
