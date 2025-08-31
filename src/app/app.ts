import {Component, inject, Inject, LOCALE_ID, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Sidebar} from './sidebar/sidebar';
import {filter} from 'rxjs';
import {BottomSheet} from './bottom-sheet/bottom-sheet';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, BottomSheet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private translate = inject(TranslateService);

  protected readonly title = signal('WhiteLabelCasinosProject');

  private paths = ['/community', '/offers', '/casino', '/crypto', '/giveaways', '/ambassador'];
  private currentPath = '';
  showSidebar = true;

  private languages = [
    {id: 'en', name: 'EN'},
    {id: 'fr', name: 'FR'},
    {id: 'es', name: 'ES'},
    {id: 'de', name: 'DE'}
  ];

  selectedLanguage = signal(this.languages[0].id);

  constructor(
    private router: Router,
    @Inject(LOCALE_ID) public localeId: string
  ) {
    this.initializeLanguage();
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
          this.currentPath = event.urlAfterRedirects;
          this.showSidebar = (this.paths.includes(event.urlAfterRedirects));
        }
      );
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
