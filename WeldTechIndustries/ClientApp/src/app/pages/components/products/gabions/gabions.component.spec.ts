import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabionsComponent } from './gabions.component';

describe('GabionsComponent', () => {
  let component: GabionsComponent;
  let fixture: ComponentFixture<GabionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
