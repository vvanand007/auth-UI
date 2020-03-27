import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterLoginComponent } from "./register-login/register-login.component";
import { AuthenticationService } from "./authentication.service";
import { LandingComponent } from "./landing/landing.component";

@NgModule({
  declarations: [AppComponent, RegisterLoginComponent, LandingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
