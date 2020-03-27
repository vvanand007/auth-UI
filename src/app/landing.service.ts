import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LandingService {
  private _getUsersURL =
    "https://lftv2uxw5i.execute-api.us-east-1.amazonaws.com/dev/users";
  constructor(private _http: HttpClient) {}
  getUsers() {
    return this._http.get<any>(this._getUsersURL);
  }
}
