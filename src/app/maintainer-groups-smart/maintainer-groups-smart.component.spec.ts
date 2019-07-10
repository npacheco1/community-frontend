import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerGroupsSmartComponent } from './maintainer-groups-smart.component';

describe('MaintainerGroupsSmartComponent', () => {
  let component: MaintainerGroupsSmartComponent;
  let fixture: ComponentFixture<MaintainerGroupsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerGroupsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerGroupsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
