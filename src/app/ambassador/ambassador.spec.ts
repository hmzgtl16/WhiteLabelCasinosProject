import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambassador } from './ambassador';

describe('Ambassador', () => {
  let component: Ambassador;
  let fixture: ComponentFixture<Ambassador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ambassador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ambassador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
