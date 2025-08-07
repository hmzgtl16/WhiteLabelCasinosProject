import {Component, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Sidebar} from './sidebar/sidebar';
import {filter} from 'rxjs';
import {BottomSheet} from './bottom-sheet/bottom-sheet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, BottomSheet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('WhiteLabelCasinosProject');

  showSidebar = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
          this.showSidebar = (event.urlAfterRedirects != '/home');
        }
      );
  }
}
