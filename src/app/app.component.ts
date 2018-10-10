import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6TestApp';
  private apiUrl = 'https://reqres.in/api/users';
  data: any = {};

  constructor(private http: Http){
    console.log('Hello');
    this.getUsers();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
    .pipe(map(res => res.json()));
  }

  getUsers(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
