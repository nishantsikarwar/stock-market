import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { AuthenticationService } from './authentication.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private router: Router, private loginService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loginService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
    return false;
    }
    
  }

}
