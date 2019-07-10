import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerTypeGroundsComponent } from './maintainer-type-grounds.component';

describe('MaintainerTypeGroundsComponent', () => {
  let component: MaintainerTypeGroundsComponent;
  let fixture: ComponentFixture<MaintainerTypeGroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerTypeGroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerTypeGroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
