import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonalWireMeshComponent } from './hexagonal-wire-mesh.component';

describe('HexagonalWireMeshComponent', () => {
  let component: HexagonalWireMeshComponent;
  let fixture: ComponentFixture<HexagonalWireMeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonalWireMeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonalWireMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
