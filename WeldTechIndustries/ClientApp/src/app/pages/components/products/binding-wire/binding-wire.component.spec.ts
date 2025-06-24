import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingWireComponent } from './binding-wire.component';

describe('BindingWireComponent', () => {
  let component: BindingWireComponent;
  let fixture: ComponentFixture<BindingWireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingWireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
