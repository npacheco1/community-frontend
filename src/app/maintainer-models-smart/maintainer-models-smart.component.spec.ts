import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerModelsSmartComponent } from './maintainer-models-smart.component';

describe('MaintainerModelsSmartComponent', () => {
  let component: MaintainerModelsSmartComponent;
  let fixture: ComponentFixture<MaintainerModelsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerModelsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerModelsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
