import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    const id = +this.route.queryParams.subscribe(values => {
      this.returnUrl = values["returnUrl"];
     // console.log(this.returnUrl);//Which will print the properties you have passed
    });
  }

  ngOnInit(): void {

  }

  login(returnUrl: string) {
      localStorage.setItem("cms", "true")
      this.router.navigate([returnUrl]);
      alert("Login thành công !");
  }
  logOut() {
    localStorage.removeItem("cms")
    if (localStorage.getItem("cms")==null)
      alert("Logot thành công !");
    else
      alert("Logout thất bại !");
  }



}
export interface ILogin {
  username: string;
  password: string;
}
