import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';

    constructor(private http: HttpClient) { 
}
ngOnInit() {
  let headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
}

onClickSubmit(result) {
  console.log(result); 
}


submit(){
  let headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
 
      this.http.post('http://127.0.0.1:8000/register',  headers).subscribe((result:any) => {
        console.log(result)
  })
}
}