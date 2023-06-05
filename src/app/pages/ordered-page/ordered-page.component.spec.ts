import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedPageComponent } from './ordered-page.component';

describe('OrderedPageComponent', () => {
  let component: OrderedPageComponent;
  let fixture: ComponentFixture<OrderedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
