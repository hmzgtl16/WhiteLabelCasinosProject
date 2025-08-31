import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-casino',
  imports: [
    TranslatePipe
  ],
  templateUrl: './casino.html',
  styleUrl: './casino.css'
})
export class Casino {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
