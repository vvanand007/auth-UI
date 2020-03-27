import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginData = {};
  constructor(
    private _authorization: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    console.log(this.loginData);
    this._authorization.loginUser(this.loginData).subscribe(
      res => {
        console.log(res), localStorage.setItem("token", res.token);
        this._router.navigate(["/user"]);
      },
      err => console.log(err)
    );
  }
}
