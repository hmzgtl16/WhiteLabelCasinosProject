import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-bottom-sheet',
  imports: [
    NgOptimizedImage

  ],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheet {

  isSheetVisible: boolean = false;
  isButtonVisible: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

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
    window.open('https://t.me/your_group_link', '_blank');
  }
  navigateBack() {
    this.location.back();
  }
}
