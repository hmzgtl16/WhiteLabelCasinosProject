import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-crypto',
  imports: [
    TranslatePipe
  ],
  templateUrl: './crypto.html',
  styleUrl: './crypto.css'
})
export class Crypto {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
