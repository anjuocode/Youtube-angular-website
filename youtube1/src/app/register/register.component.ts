import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { 
  }

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
        this.http.post('http://localhost:8000/register', bodydata, headers).subscribe((result:any) => {
          console.log(result,"fdffffff")
    })
  }

}
