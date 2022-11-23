import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbPasteComponent } from './pb-paste.component';

describe('PbPasteComponent', () => {
  let component: PbPasteComponent;
  let fixture: ComponentFixture<PbPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbPasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
