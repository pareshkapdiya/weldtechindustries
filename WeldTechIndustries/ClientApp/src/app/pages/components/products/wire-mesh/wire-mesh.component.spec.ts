import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireMeshComponent } from './wire-mesh.component';

describe('WireMeshComponent', () => {
  let component: WireMeshComponent;
  let fixture: ComponentFixture<WireMeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireMeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
