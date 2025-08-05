import {Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    RouterLink

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('telegram') card1!: ElementRef;
  @ViewChild('casino') card2!: ElementRef;

  activeCard: number | null = null;
  private observer!: IntersectionObserver;
  private cardVisibility = [0, 0];

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

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  ngOnInit(): void {
    this.checkIfMobile();
  }

  private setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.buildThresholdList()
    };

    this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            let cardIndex: number;
            if (entry.target === this.card1.nativeElement) {
              cardIndex = 1;
            } else if (entry.target === this.card2.nativeElement) {
              cardIndex = 2;
            } else {
              cardIndex = 0;
            }
            this.cardVisibility[cardIndex - 1] = entry.intersectionRatio;

            this.updateActiveCard();
          }
        );
      },
      options
    );

    this.observer.observe(this.card1.nativeElement);
    this.observer.observe(this.card2.nativeElement);
  }

  private buildThresholdList(): number[] {
    const steps = 20;
    const thresholds = [];
    for (let i = 0; i <= steps; i++) {
      thresholds.push(i / steps);
    }
    return thresholds;
  }

  private updateActiveCard() {
    // Determine which card is more visible in the center of viewport
    if (this.cardVisibility[0] > 0.5 && this.cardVisibility[0] > this.cardVisibility[1]) {
      this.activeCard = 1;
    } else if (this.cardVisibility[1] > 0.5 && this.cardVisibility[1] > this.cardVisibility[0]) {
      this.activeCard = 2;
    } else {
      this.activeCard = 0;
    }
  }

  navigateToDestination() {
    if (this.activeCard === 1) {
      this.joinTelegram();
    } else if (this.activeCard === 2) {
      this.joinCommunity();
    }
  }

  fabText() {
    if (this.activeCard === 1) {
      return 'Join Telegram Group';
    } else if (this.activeCard === 2) {
      return 'Discover our Community';
    }
    return '';
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
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
    if (imageType === 'telegram'
    ) {
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
  openInstagram()
    :
    void {
    window.open(this.socialLinks.instagram, '_blank');
  }

  openFacebook()
    :
    void {
    window.open(this.socialLinks.facebook, '_blank');
  }

  openEmail()
    :
    void {
    window.location.href = this.socialLinks.email;
  }

  // Action handlers
  joinTelegram()
    :
    void {
    window.open(this.telegramGroupLink, '_blank');
  }

  joinCommunity()
    :
    void {
    this.router.navigate([this.communityLink]);
  }

  // Animation and interaction handlers
  onCardHover(event: Event, isEntering: boolean): void {
    const card = event.target as HTMLElement;
    if (!
      this.isMobile
    ) {
      card.style.transform = isEntering ? 'translateY(-10px)' : 'translateY(0)';
    }
  }

  onButtonTouch(event: Event, isStart: boolean): void {
    if (this.isMobile
    ) {
      const button = event.target as HTMLElement;
      button.style.transform = isStart
        ? 'translateX(-50%) scale(0.95)'
        : 'translateX(-50%) scale(1)';
    }
  }
}
