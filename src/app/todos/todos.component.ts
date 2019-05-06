import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(value => {
        console.log({ todos: value });
      })
  }

}
