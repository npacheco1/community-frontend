import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerRolesComponent } from './maintainer-roles.component';

describe('MaintainerRolesComponent', () => {
  let component: MaintainerRolesComponent;
  let fixture: ComponentFixture<MaintainerRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
