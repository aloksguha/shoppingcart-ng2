import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartObserverComponent } from './cart-observer.component';

describe('CartObserverComponent', () => {
  let component: CartObserverComponent;
  let fixture: ComponentFixture<CartObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
