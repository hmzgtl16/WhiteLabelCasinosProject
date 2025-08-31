import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-community',
  imports: [
    TranslatePipe
  ],
  templateUrl: './community.html',
  styleUrl: './community.css'
})
export class Community {

  private translate = inject(TranslateService);

  communityHeroDescription = ''

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.translate
      .get('community-hero-description')
      .subscribe((res: string) => {
        this.communityHeroDescription = res;
      });
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

  navigateBack() {
    this.router.navigate(['..']).then();
  }
}
