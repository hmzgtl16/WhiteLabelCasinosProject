import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-crypto',
  imports: [
    TranslatePipe
  ],
  templateUrl: './crypto.html',
  styleUrl: './crypto.css',
  encapsulation: ViewEncapsulation.None
})
export class Crypto {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
