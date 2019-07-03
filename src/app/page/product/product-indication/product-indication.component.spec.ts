import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIndicationComponent } from './product-indication.component';

describe('ProductIndicationComponent', () => {
  let component: ProductIndicationComponent;
  let fixture: ComponentFixture<ProductIndicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIndicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
