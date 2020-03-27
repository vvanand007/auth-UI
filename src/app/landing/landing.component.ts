import { Component, OnInit } from "@angular/core";
import { LandingService } from "../landing.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  public user = { email: "", name: "" };
  constructor(
    private _landingService: LandingService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._landingService.getUsers().subscribe(
      res => ((this.user.email = res.email), (this.user.name = res.name)),
      err => console.log(err)
    );
  }
}
