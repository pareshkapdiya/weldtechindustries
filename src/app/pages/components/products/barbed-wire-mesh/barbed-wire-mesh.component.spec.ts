import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbedWireMeshComponent } from './barbed-wire-mesh.component';

describe('BarbedWireMeshComponent', () => {
  let component: BarbedWireMeshComponent;
  let fixture: ComponentFixture<BarbedWireMeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbedWireMeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbedWireMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
