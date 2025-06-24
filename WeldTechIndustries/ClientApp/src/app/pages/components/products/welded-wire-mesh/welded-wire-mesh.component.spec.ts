import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldedWireMeshComponent } from './welded-wire-mesh.component';

describe('WeldedWireMeshComponent', () => {
  let component: WeldedWireMeshComponent;
  let fixture: ComponentFixture<WeldedWireMeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldedWireMeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldedWireMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
