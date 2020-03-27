import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { LandingComponent } from "./landing/landing.component";
import { LandingService } from "./landing.service";
import { AuthenticationGuard } from "./authentication.guard";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { TokenIterceptorService } from "./token-iterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthenticationService,
    LandingService,
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
