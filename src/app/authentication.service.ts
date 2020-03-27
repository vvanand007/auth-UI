import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _registerationURL =
    "https://lftv2uxw5i.execute-api.us-east-1.amazonaws.com/dev/register";
  private _loginURL =
    "https://lftv2uxw5i.execute-api.us-east-1.amazonaws.com/dev/login";
  constructor(private _http: HttpClient) {}

  registerUser(user) {
    return this._http.post<any>(this._registerationURL, user); //returns observable
  }
  loginUser(user) {
    return this._http.post<any>(this._loginURL, user);
  }
}
