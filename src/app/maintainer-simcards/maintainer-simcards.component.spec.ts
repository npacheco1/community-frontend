import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerSimcardsComponent } from './maintainer-simcards.component';

describe('MaintainerSimcardsComponent', () => {
  let component: MaintainerSimcardsComponent;
  let fixture: ComponentFixture<MaintainerSimcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerSimcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerSimcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
