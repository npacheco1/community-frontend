import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerModelsComponent } from './maintainer-models.component';

describe('MaintainerModelsComponent', () => {
  let component: MaintainerModelsComponent;
  let fixture: ComponentFixture<MaintainerModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainerModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
