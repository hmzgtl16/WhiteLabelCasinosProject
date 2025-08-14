import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-community',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './community.html',
  styleUrl: './community.css'
})
export class Community {

  constructor(private router: Router) {
  }

  navigateToOffers() {
    this.router.navigate(['/offers']).then();
  }

  navigateToCasino() {
    this.router.navigate(['/casino']).then();
  }

  navigateToCrypto() {
    this.router.navigate(['/crypto']).then();
  }

  navigateToGiveaways() {
    this.router.navigate(['/giveaways']).then();
  }

  navigateToAmbassador() {
    this.router.navigate(['/ambassador']).then();
  }
}
