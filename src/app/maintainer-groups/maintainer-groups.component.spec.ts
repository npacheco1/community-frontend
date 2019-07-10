import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerGroupsComponent } from './maintainer-groups.component';

describe('MaintainerGroupsComponent', () => {
  let component: MaintainerGroupsComponent;
  let fixture: ComponentFixture<MaintainerGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
