import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerContactsComponent } from './maintainer-contacts.component';

describe('MaintainerContactsComponent', () => {
  let component: MaintainerContactsComponent;
  let fixture: ComponentFixture<MaintainerContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
