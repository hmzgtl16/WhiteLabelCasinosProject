import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(private router: Router) {
  }

  homeLink = '/home';
  communityLink = '/community';
  offersLink = '/offers';
  casinoLink = '/casino';
  cryptoLink = '/crypto';
  giveawaysLink = '/giveaways';
  ambassadorLink = '/ambassador';

  navigateToHome(): void {
    this.router.navigate([this.homeLink]);

  }
  navigateToCommunity() {
    this.router.navigate([this.communityLink]);
  }
  navigateToOffers() {
    this.router.navigate([this.offersLink]);
  }
  navigateToCasino() {
    this.router.navigate([this.casinoLink]);
  }
  navigateToCrypto() {
    this.router.navigate([this.cryptoLink]);
  }
  navigateToGiveaways() {
    this.router.navigate([this.giveawaysLink]);
  }
  navigateToAmbassador() {
    this.router.navigate([this.ambassadorLink]);
  }
}
