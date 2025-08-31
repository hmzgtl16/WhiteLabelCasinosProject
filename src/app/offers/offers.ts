import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-offers',
  imports: [
    TranslatePipe
  ],
  templateUrl: './offers.html',
  styleUrl: './offers.css'
})
export class Offers {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
