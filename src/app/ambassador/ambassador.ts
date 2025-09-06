import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-ambassador',
  imports: [
    TranslatePipe
  ],
  templateUrl: './ambassador.html',
  styleUrl: './ambassador.css',
  encapsulation: ViewEncapsulation.None
})
export class Ambassador {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
