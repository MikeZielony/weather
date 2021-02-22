import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexelComponent } from './pexel.component';

describe('PexelComponent', () => {
  let component: PexelComponent;
  let fixture: ComponentFixture<PexelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PexelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PexelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
