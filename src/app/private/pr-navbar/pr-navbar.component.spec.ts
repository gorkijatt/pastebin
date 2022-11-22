import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrNavbarComponent } from './pr-navbar.component';

describe('PrNavbarComponent', () => {
  let component: PrNavbarComponent;
  let fixture: ComponentFixture<PrNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
