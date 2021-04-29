import { TokenStorageServiceService } from './../service/TokenStorageService.service';
import { AuthServiceService } from './../service/AuthService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.scss']
})
export class DangkyComponent implements OnInit {
  form: any = {
    username: "user@example.com",
    password: "11111",
    confirmPassword: "11111"

  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthServiceService, private tokenStorage: TokenStorageServiceService, private user: UserDataService) { }

  ngOnInit() {
  }
  onSubmit() {
    const item = this.form;

    this.authService.register(item).subscribe(
      data => {
        try {
          if (data) {
            this.roles = "Đăng ký thành công nha !";
            window.location.href = "home/login";
          }
          else
          {
            this.errorMessage = data
            this.isLoginFailed=true
          }
        } catch (error) {
          console.log(error)
          this.errorMessage = error.ConfirmPassword[0];
          this.isLoginFailed=true
        }

      },
      err => {
        console.log(err.status)

      }
    );
  }
}
