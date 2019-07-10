import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerActionsComponent } from './maintainer-actions.component';

describe('MaintainerActionsComponent', () => {
  let component: MaintainerActionsComponent;
  let fixture: ComponentFixture<MaintainerActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
