import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainLinkFenceComponent } from './chain-link-fence.component';

describe('ChainLinkFenceComponent', () => {
  let component: ChainLinkFenceComponent;
  let fixture: ComponentFixture<ChainLinkFenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainLinkFenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainLinkFenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
