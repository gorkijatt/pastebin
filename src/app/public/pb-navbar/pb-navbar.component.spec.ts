import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbNavbarComponent } from './pb-navbar.component';

describe('PbNavbarComponent', () => {
  let component: PbNavbarComponent;
  let fixture: ComponentFixture<PbNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
