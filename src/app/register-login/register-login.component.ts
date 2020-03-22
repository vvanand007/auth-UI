import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-login",
  templateUrl: "./register-login.component.html",
  styleUrls: ["./register-login.component.css"]
})
export class RegisterLoginComponent implements OnInit {
  constructor() {}
  public emailRegister = "";
  public nameRegister = "";
  public passwordRegister = "";
  public emailLogin = "";
  public passwordLogin = "";

  ngOnInit() {}

  onRegister() {
    console.log("firing register");
  }

  onLogin() {
    console.log("logined");
  }
}
