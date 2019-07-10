import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDesignComponent } from './sale-design.component';

describe('SaleDesignComponent', () => {
  let component: SaleDesignComponent;
  let fixture: ComponentFixture<SaleDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
