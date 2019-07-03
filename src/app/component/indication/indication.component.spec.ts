import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationComponent } from './indication.component';

describe('IndicationComponent', () => {
  let component: IndicationComponent;
  let fixture: ComponentFixture<IndicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
