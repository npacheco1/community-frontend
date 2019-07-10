import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerDispositivesSmartComponent } from './maintainer-dispositives-smart.component';

describe('MaintainerDispositivesSmartComponent', () => {
  let component: MaintainerDispositivesSmartComponent;
  let fixture: ComponentFixture<MaintainerDispositivesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerDispositivesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerDispositivesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
