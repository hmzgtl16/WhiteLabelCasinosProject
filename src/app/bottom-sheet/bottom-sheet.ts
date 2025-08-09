import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bottom-sheet',
  imports: [

  ],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheet {

  offersLink = '/offers';
  casinoLink = '/casino';
  cryptoLink = '/crypto';
  giveawaysLink = '/giveaways';
  ambassadorLink = '/ambassador';
  isSheetVisible: boolean = false;
  isButtonVisible: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  showBottomSheet(): void {
    this.isSheetVisible = true;
    this.isButtonVisible = false;
  }
  hideBottomSheet(): void {
    this.isSheetVisible = false;
    this.isButtonVisible = true;
  }
  navigateToOffers() {
    this.router.navigate([this.offersLink]);
    this.hideBottomSheet()
  }
  navigateToCasino() {
    this.router.navigate([this.casinoLink]);
    this.hideBottomSheet()
  }
  navigateToCrypto() {
    this.router.navigate([this.cryptoLink]);
    this.hideBottomSheet()
  }
  navigateToGiveaways() {
    this.router.navigate([this.giveawaysLink]);
    this.hideBottomSheet()
  }
  navigateToAmbassador() {
    this.router.navigate([this.ambassadorLink]);
    this.hideBottomSheet()
  }

  navigateBack() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
