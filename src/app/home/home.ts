import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild
} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {filter} from 'rxjs';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit, OnDestroy {

  private translate = inject(TranslateService);

  @ViewChild('telegram') card1!: ElementRef;
  @ViewChild('casino') card2!: ElementRef;
  @ViewChild('mainRow') mainRow!: ElementRef;
  @ViewChild('rowContainer') rowContainer!: ElementRef;

  activeCard: number | null = null;
  private observer!: IntersectionObserver;
  private cardVisibility = [0, 0];

  private languages = [
    {id: 'en', name: 'EN'},
    {id: 'fr', name: 'FR'},
    {id: 'es', name: 'ES'},
    {id: 'de', name: 'DE'}
  ];

  selectedLanguage = signal(this.languages[0].id);

// Configuration properties
  telegramGroupLink = 'https://t.me/WhiteLabelCasinosBot';
  communityLink = '/community';

  isMobile = false;

  constructor(
    private router: Router,
  ) {
    this.initializeLanguage();
  }

  ngAfterViewInit() {
    this.setupObserver();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {});
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

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  joinTelegram(): void {
    window.open(this.telegramGroupLink, '_blank');
  }

  joinCommunity(): void {
    this.router.navigateByUrl(this.communityLink).then();
  }

  selectLanguage(lang: string) {
    this.translate.use(lang)
    localStorage.setItem('selectedLanguage', lang);
  }

  getLanguages() {
    return this.languages.filter(language => language.id !== this.getSelectedLanguage().id);
  }

  getSelectedLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    return this.languages.find(lang => lang.id === savedLang) || this.languages[0];
  }

  private initializeLanguage() {
    // Get saved language or use browser language
    const selectedLanguage = this.getSelectedLanguage()
    this.selectLanguage(selectedLanguage.id);
  }
}
