import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class TokenIterceptorService implements HttpInterceptor {
  constructor(private _injector: Injector) {}

  intercept(req, next) {
    let authenticationService = this._injector.get(AuthenticationService);
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `${authenticationService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
