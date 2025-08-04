import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Casino } from './casino';

describe('Casino', () => {
  let component: Casino;
  let fixture: ComponentFixture<Casino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Casino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Casino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
