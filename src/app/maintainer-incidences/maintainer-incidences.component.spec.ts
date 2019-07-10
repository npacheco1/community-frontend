import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerIncidencesComponent } from './maintainer-incidences.component';

describe('MaintainerIncidencesComponent', () => {
  let component: MaintainerIncidencesComponent;
  let fixture: ComponentFixture<MaintainerIncidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerIncidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerIncidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
