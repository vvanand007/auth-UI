import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-register-login",
  templateUrl: "./register-login.component.html",
  styleUrls: ["./register-login.component.css"]
})
export class RegisterLoginComponent implements OnInit {
  registrationData = {};
  loginData = {};
  constructor(private _authorization: AuthenticationService) {}

  ngOnInit() {}

  onRegister() {
    console.log(this.registrationData);
    this._authorization.registerUser(this.registrationData).subscribe(
      res => {
        console.log(res), localStorage.setItem("token", res.token);
      },
      err => console.log(err)
    );
  }
  onLogin() {
    console.log(this.loginData);
    this._authorization.loginUser(this.loginData).subscribe(
      res => {
        console.log(res), localStorage.setItem("token", res.token);
      },
      err => console.log(err)
    );
  }
}
