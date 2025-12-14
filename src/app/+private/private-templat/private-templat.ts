import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-templat',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './private-templat.html',
  styleUrl: './private-templat.scss',
})
export class PrivateTemplat {
  router=inject(Router);
logoff() {
sessionStorage.clear();
localStorage.removeItem('auth-token');
this.router.navigateByUrl('/login');
}

}
