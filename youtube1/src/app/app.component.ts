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
  // onClickSubmit(result) {
  //   console.log(result); 
  //   console.log("Submit")
  // }
  Submit(){
    console.log("Submit ----------------")
  //   let headers={
  //     headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //     })
  // }
    // let bodydata = {
    //   email : 'anjukargwaal@gmail.com',
    //   msg : 'Hello anju!'
    // }
    //     this.http.post('http://localhost:8000/register', bodydata, headers).subscribe((result:any) => {
    //       console.log(result,)
    // })
  }

}