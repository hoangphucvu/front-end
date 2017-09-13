import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  data = [];
  postList =  [];
  constructor(private http: Http) {

  }

  ngOnInit() {
    const authorsApi = this.http.get('/assets/data/authors.json').map(res => res.json());
    const postApi =    this.http.get('/assets/data/posts.json').map(res => res.json());

    Observable.forkJoin([authorsApi, postApi]).subscribe(results => {
      this.data = results[1];
      this.data.push(results[0]);
      console.log(this.data);
    });
  }

}

