import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto } from './crypto';

describe('Crypto', () => {
  let component: Crypto;
  let fixture: ComponentFixture<Crypto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crypto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crypto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
