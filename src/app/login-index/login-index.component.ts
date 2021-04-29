import { UserDataService } from './../service/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../service/AuthService.service';
import { TokenStorageServiceService } from '../service/TokenStorageService.service';
@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {
  returnUrl: string;
  form: any = {
    username: "user@example.com",
    password: "string"
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthServiceService, private tokenStorage: TokenStorageServiceService, private user: UserDataService) { }

  ngOnInit(): void {
    const id = +this.route.queryParams.subscribe(values => {
      this.returnUrl = values["returnUrl"]
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }
    // this.user.getUser("6085551dd42969f97f1e3a3d").subscribe(item => this.tokenStorage.saveUser(item))
  }

  onSubmit() {
    const item = this.form;

    this.authService.login(item).subscribe(
      data => {
        try {
          if (data.token && data.expiration) {
            this.roles = "Đăng nhập thành công nha !";
            this.tokenStorage.saveToken(data.token);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.tokenStorage.saveId(data.id)
           // window.location.reload();

            //  this.router.navigate([this.returnUrl])
            window.location.href = this.returnUrl;
            // this.reloadPage();

          }
        } catch (error) {
          this.errorMessage = "Tên đăng nhập hoặc mật khẩu hông chính xác nha !";
          this.isLoginFailed = true;
        }

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();

  }
}