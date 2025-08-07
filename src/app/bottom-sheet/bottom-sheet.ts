import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-bottom-sheet',
  imports: [
    RouterLink
  ],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheet {
  isSheetVisible: boolean = false;
  isButtonVisible: boolean = true;

  showBottomSheet(): void {
    this.isSheetVisible = true;
    this.isButtonVisible = false;
  }

  hideBottomSheet(): void {
    this.isSheetVisible = false;
    this.isButtonVisible = true;
  }
}
