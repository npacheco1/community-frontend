import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerSimcardsSmartComponent } from './maintainer-simcards-smart.component';

describe('MaintainerSimcardsSmartComponent', () => {
  let component: MaintainerSimcardsSmartComponent;
  let fixture: ComponentFixture<MaintainerSimcardsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerSimcardsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerSimcardsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
