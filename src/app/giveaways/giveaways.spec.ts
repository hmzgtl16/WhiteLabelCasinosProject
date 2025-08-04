import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giveaways } from './giveaways';

describe('Giveaways', () => {
  let component: Giveaways;
  let fixture: ComponentFixture<Giveaways>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giveaways]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giveaways);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
