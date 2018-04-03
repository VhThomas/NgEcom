import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.user$.map(user => {
      if(user) return true;

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url} });
      return false;
    })
  }

  constructor(private authService: AuthService, private router: Router) { }

}
