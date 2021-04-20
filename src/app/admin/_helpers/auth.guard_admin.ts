import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuardAdmin implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const currentUser = localStorage.getItem('cms');
        if (currentUser == "true") {
            // authorised so return true
            return true;
        }
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });

    return false;
    }
}