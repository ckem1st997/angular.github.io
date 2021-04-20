import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {
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
      localStorage.setItem("home", "true")
      this.router.navigate([returnUrl]);
      alert("Login thành công !");
  }
  logOut() {
    localStorage.removeItem("home")
    if (localStorage.getItem("home")==null)
      alert("Logot thành công !");
    else
      alert("Logout thất bại !");
  }



}
export interface ILogin {
  username: string;
  password: string;
}
