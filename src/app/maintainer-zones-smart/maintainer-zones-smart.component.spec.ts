import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerZonesSmartComponent } from './maintainer-zones-smart.component';

describe('MaintainerZonesSmartComponent', () => {
  let component: MaintainerZonesSmartComponent;
  let fixture: ComponentFixture<MaintainerZonesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerZonesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerZonesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
