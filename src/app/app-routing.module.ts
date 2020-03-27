import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterLoginComponent } from "./register-login/register-login.component";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  { path: "login-register", component: RegisterLoginComponent },
  { path: "user", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
