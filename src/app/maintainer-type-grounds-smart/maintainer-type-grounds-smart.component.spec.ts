import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerTypeGroundsSmartComponent } from './maintainer-type-grounds-smart.component';

describe('MaintainerTypeGroundsSmartComponent', () => {
  let component: MaintainerTypeGroundsSmartComponent;
  let fixture: ComponentFixture<MaintainerTypeGroundsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerTypeGroundsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerTypeGroundsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
