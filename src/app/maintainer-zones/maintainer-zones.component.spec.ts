import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerZonesComponent } from './maintainer-zones.component';

describe('MaintainerZonesComponent', () => {
  let component: MaintainerZonesComponent;
  let fixture: ComponentFixture<MaintainerZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
