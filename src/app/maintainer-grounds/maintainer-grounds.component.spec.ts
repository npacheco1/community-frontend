import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerGroundsComponent } from './maintainer-grounds.component';

describe('MaintainerGroundsComponent', () => {
  let component: MaintainerGroundsComponent;
  let fixture: ComponentFixture<MaintainerGroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerGroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerGroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
