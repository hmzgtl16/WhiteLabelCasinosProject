import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  // Configuration properties
  socialLinks = {
    instagram: 'https://www.instagram.com/white_label_casinos',
    facebook: 'https://facebook.com/Whitelabelcasinos',
    email: 'mailto:your@email.com'
  };

  telegramGroupLink = 'https://t.me/your_group_link';
  communityLink = '/community';

  // Image configuration
  telegramImageSrc = 'public/telegram.jpg';
  telegramImageAlt = 'Join our Telegram community';
  telegramImagePosition = 'center center';

  casinoImageSrc = 'public/casino.jpg';
  casinoImageAlt = 'Join our casino community';
  casinoImagePosition = 'center center';

  // Fallback images
  telegramFallbackSrc = 'assets/images/telegram-fallback.jpg';
  casinoFallbackSrc = 'assets/images/casino-fallback.jpg';

  isMobile = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  // Image error handling
  onImageError(event: Event, imageType: 'telegram' | 'casino'): void {
    const img = event.target as HTMLImageElement;
    console.warn(`Failed to load ${imageType} image:`, img.src);

    // Set fallback image or gradient background
    if (imageType === 'telegram') {
      if (img.src !== this.telegramFallbackSrc) {
        img.src = this.telegramFallbackSrc;
      } else {
        // If fallback also fails, hide image and show gradient background
        img.style.display = 'none';
        img.parentElement?.classList.add('telegram-gradient-fallback');
      }
    } else if (imageType === 'casino') {
      if (img.src !== this.casinoFallbackSrc) {
        img.src = this.casinoFallbackSrc;
      } else {
        // If fallback also fails, hide image and show gradient background
        img.style.display = 'none';
        img.parentElement?.classList.add('casino-gradient-fallback');
      }
    }
  }

  // Social media handlers
  openInstagram(): void {
    window.open(this.socialLinks.instagram, '_blank');
  }

  openFacebook(): void {
    window.open(this.socialLinks.facebook, '_blank');
  }

  openEmail(): void {
    window.location.href = this.socialLinks.email;
  }

  // Action handlers
  joinTelegram(): void {
    window.open(this.telegramGroupLink, '_blank');
  }

  joinCommunity(): void {
    this.router.navigate([this.communityLink]);
  }

  // Animation and interaction handlers
  onCardHover(event: Event, isEntering: boolean): void {
    const card = event.target as HTMLElement;
    if (!this.isMobile) {
      card.style.transform = isEntering ? 'translateY(-10px)' : 'translateY(0)';
    }
  }

  onButtonTouch(event: Event, isStart: boolean): void {
    if (this.isMobile) {
      const button = event.target as HTMLElement;
      button.style.transform = isStart
        ? 'translateX(-50%) scale(0.95)'
        : 'translateX(-50%) scale(1)';
    }
  }
}
