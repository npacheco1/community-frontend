import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerDispositivesComponent } from './maintainer-dispositives.component';

describe('MaintainerDispositivesComponent', () => {
  let component: MaintainerDispositivesComponent;
  let fixture: ComponentFixture<MaintainerDispositivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerDispositivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerDispositivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
