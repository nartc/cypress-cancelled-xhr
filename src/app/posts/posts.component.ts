import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    timer(0)
      .pipe(delay(1000), switchMap(_ => this.httpClient.get('https://jsonplaceholder.typicode.com/posts')))
      .subscribe(value => {
        console.log({ posts: value });
      });
  }

}
