import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-giveaways',
    imports: [
        TranslatePipe

    ],
  templateUrl: './giveaways.html',
  styleUrl: './giveaways.css'
})
export class Giveaways {

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate(['/community']).then();
  }
}
