import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Community } from './community/community';
import { Crypto } from './crypto/crypto';
import { Giveaways } from './giveaways/giveaways';
import { Offers } from './offers/offers';
import { Casino } from './casino/casino';
import { Ambassador } from './ambassador/ambassador';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'community', component: Community },
  { path: 'crypto', component: Crypto },
  { path: 'giveaways', component: Giveaways },
  { path: 'offers', component: Offers },
  { path: 'casino', component: Casino },
  { path: 'ambassador', component: Ambassador },
];
