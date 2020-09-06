import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuardService implements CanActivate{

  constructor(private router: Router, private loginService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loginService.isUserLoggedIn()){
      this.router.navigate([''])
      return false
    }
    else
    return true;
    }
    
  }

