import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {NgOptimizedImage} from '@angular/common';
import {filter} from 'rxjs';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-bottom-sheet',
  imports: [
    NgOptimizedImage,
    TranslatePipe

  ],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheet implements OnInit {

  isSheetVisible: boolean = false;
  isButtonVisible: boolean = true;
  isCommunityPath: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        let currentPath = event.urlAfterRedirects;
        this.isCommunityPath = currentPath.includes('/community');
      });
  }

  showBottomSheet(): void {
    this.isSheetVisible = true;
    this.isButtonVisible = false;
  }
  hideBottomSheet(): void {
    this.isSheetVisible = false;
    this.isButtonVisible = true;
  }
  navigateToHome() {
    this.router.navigate(['..'], { relativeTo: this.route }).then();
  }
  navigateToOffers() {
    this.router.navigate(['/offers']).then();
    this.hideBottomSheet()
  }
  navigateToCasino() {
    this.router.navigate(['/casino']).then();
    this.hideBottomSheet()
  }
  navigateToCrypto() {
    this.router.navigate(['/crypto']).then();
    this.hideBottomSheet()
  }
  navigateToGiveaways() {
    this.router.navigate(['/giveaways']).then();
    this.hideBottomSheet()
  }
  navigateToAmbassador() {
    this.router.navigate(['/ambassador']).then();
    this.hideBottomSheet()
  }
  navigateToTelegram(): void {
    window.open('https://t.me/WhiteLabelCasinosBot', '_blank');
  }
  navigateBack() {
    if (this.isCommunityPath) {
      this.router.navigate(['..']).then();
    } else {
      this.router.navigate(['/community'], { relativeTo: this.route }).then();
    }
    this.hideBottomSheet()
  }
}
