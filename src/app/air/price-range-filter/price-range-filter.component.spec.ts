import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeFilterComponent } from './price-range-filter.component';

describe('PriceRangeFilterComponent', () => {
  let component: PriceRangeFilterComponent;
  let fixture: ComponentFixture<PriceRangeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRangeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
