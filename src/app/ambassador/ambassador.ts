import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-ambassador',
  imports: [
    TranslatePipe
  ],
  templateUrl: './ambassador.html',
  styleUrl: './ambassador.css'
})
export class Ambassador {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
