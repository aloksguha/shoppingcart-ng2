import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterComponentComponent } from './center-component.component';

describe('CenterComponentComponent', () => {
  let component: CenterComponentComponent;
  let fixture: ComponentFixture<CenterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
