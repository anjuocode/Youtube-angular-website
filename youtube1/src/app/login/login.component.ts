import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
  }
  submit(){
    console.log("Submit----------------")
  }
  onClickSubmit(result) {
    console.log(result); 
    console.log("Submit------onClick ")
        let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
  let bodydata = {
      
  }
      this.http.post('http://127.0.0.1:8000/login', bodydata, headers).subscribe((result:any) => {
        console.log(result,"fdffffff")
  })
}
}
