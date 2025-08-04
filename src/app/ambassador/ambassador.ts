import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-ambassador',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './ambassador.html',
  styleUrl: './ambassador.css'
})
export class Ambassador {
  isSheetOpen: boolean = false;

  @ViewChild('bottomSheet') bottomSheet!: ElementRef;

  ngAfterViewInit(): void {
    const offcanvasEl = this.bottomSheet.nativeElement;

    // Listen for the Bootstrap 'show' event
    offcanvasEl.addEventListener('show.bs.offcanvas', () => {
      this.isSheetOpen = true;
      console.log('Offcanvas is showing. FAB should hide.');
    });

    // Listen for the Bootstrap 'hide' event
    offcanvasEl.addEventListener('hide.bs.offcanvas', () => {
      this.isSheetOpen = false;
      console.log('Offcanvas is showing. FAB should show.');
    });
  }
}
