import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { UserModel } from '../_models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routeHidden = true;
  loading = false;
  users: UserModel[];

  constructor(
    private router: Router,
    private readonly user: UserService
  ) { }

  ngOnInit() {
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        if (e.url === "/login" || e.url === "/sign-up") {
          this.routeHidden = false;
        } else {
          this.routeHidden = true;
        }
      }
    })

    this.user.getAll().subscribe((res: UserModel[]) => {
      console.log(res);
      this.loading = false;
      this.users = res;
    })
  }

}
