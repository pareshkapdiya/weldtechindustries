import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertinaCoilsComponent } from './concertina-coils.component';

describe('ConcertinaCoilsComponent', () => {
  let component: ConcertinaCoilsComponent;
  let fixture: ComponentFixture<ConcertinaCoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertinaCoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertinaCoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
