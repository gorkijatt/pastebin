import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbHomeComponent } from './pb-home.component';

describe('PbHomeComponent', () => {
  let component: PbHomeComponent;
  let fixture: ComponentFixture<PbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
