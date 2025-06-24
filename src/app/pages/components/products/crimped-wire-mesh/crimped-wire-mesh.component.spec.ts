import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimpedWireMeshComponent } from './crimped-wire-mesh.component';

describe('CrimpedWireMeshComponent', () => {
  let component: CrimpedWireMeshComponent;
  let fixture: ComponentFixture<CrimpedWireMeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimpedWireMeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimpedWireMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
