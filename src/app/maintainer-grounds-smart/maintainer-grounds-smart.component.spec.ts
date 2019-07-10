import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerGroundsSmartComponent } from './maintainer-grounds-smart.component';

describe('MaintainerGroundsSmartComponent', () => {
  let component: MaintainerGroundsSmartComponent;
  let fixture: ComponentFixture<MaintainerGroundsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerGroundsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerGroundsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
