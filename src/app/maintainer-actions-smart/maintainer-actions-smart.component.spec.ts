import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerActionsSmartComponent } from './maintainer-actions-smart.component';

describe('MaintainerActionsSmartComponent', () => {
  let component: MaintainerActionsSmartComponent;
  let fixture: ComponentFixture<MaintainerActionsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerActionsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerActionsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
