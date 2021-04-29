import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { TokenStorageServiceService } from '../service/TokenStorageService.service';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  userdata: any;
  constructor(private tokenStorage: TokenStorageServiceService, private user: UserDataService) {
  }

  ngOnInit() {
    const id = this.tokenStorage.getId();
    try {
      if (this.tokenStorage.getUser().id.length > 0)
        this.userdata = this.tokenStorage.getUser()
    } catch (error) {
      this.user.getUser(id).subscribe(item => {
        this.tokenStorage.saveUser(item),
          this.userdata = item
      })
    }
    // console.log(this.userdata);
  }

  signout(){
    this.tokenStorage.removeAll()
    window.location.href=""
  }


}

