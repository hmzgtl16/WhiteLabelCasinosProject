import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {

  currentPath: string = '';
  isCommunityPath: boolean = true;
  isOffersPath: boolean = false;
  isCasinoPath: boolean = false;
  isCryptoPath: boolean = false;
  isGiveawaysPath: boolean = false;
  isAmbassadorPath: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPath = event.urlAfterRedirects;
        this.isCommunityPath = this.currentPath.includes('/community');
        this.isOffersPath = this.currentPath.includes('/offers');
        this.isCasinoPath = this.currentPath.includes('/casino');
        this.isCryptoPath = this.currentPath.includes('/crypto');
        this.isGiveawaysPath = this.currentPath.includes('/giveaways');
        this.isAmbassadorPath = this.currentPath.includes('/ambassador');
      });
  }

  navigateToHome(): void {
    this.router.navigate(['/home']).then();
  }
  navigateToCommunity() {
    this.router.navigate(['/community']).then();
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

  protected getCurrentRouteText() {
    let text = '';
    const currentRoute = this.currentPath;
    switch(currentRoute) {
      case('/offers'):
        text = 'Offers';
        break;
      case('/casino'):
        text = 'Casino';
        break;
      case('/crypto'):
        text = 'Crypto';
        break;
      case('/giveaways'):
        text = 'Giveaways';
        break;
      case('/ambassador'):
        text = 'Ambassador';
        break;
      default: text = ''
    }
    return text;
  }
}
