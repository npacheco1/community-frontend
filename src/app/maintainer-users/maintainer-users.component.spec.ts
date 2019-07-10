import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerUsersComponent } from './maintainer-users.component';

describe('MaintainerComponent', () => {
  let component: MaintainerUsersComponent;
  let fixture: ComponentFixture<MaintainerUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
