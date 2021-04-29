import { TokenStorageServiceService } from './../../service/TokenStorageService.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router, private au:TokenStorageServiceService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
            if (this.au.active()) {
                // authorised so return true
                return true;
            }
            this.router.navigate(['home/login'], { queryParams: { returnUrl: state.url } });

        return false;
    }
}