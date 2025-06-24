import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedMetalPerforetedSheetComponent } from './expanded-metal-perforeted-sheet.component';

describe('ExpandedMetalPerforetedSheetComponent', () => {
  let component: ExpandedMetalPerforetedSheetComponent;
  let fixture: ComponentFixture<ExpandedMetalPerforetedSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedMetalPerforetedSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedMetalPerforetedSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
