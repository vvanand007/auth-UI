import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registrationData = {};
  constructor(
    private _authorization: AuthenticationService,
    private _router: Router
  ) {}

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
}
