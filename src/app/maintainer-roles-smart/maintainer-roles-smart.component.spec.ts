import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerRolesSmartComponent } from './maintainer-roles-smart.component';

describe('MaintainerRolesSmartComponent', () => {
  let component: MaintainerRolesSmartComponent;
  let fixture: ComponentFixture<MaintainerRolesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerRolesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerRolesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
