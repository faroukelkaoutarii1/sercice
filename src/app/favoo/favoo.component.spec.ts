import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavooComponent } from './favoo.component';

describe('FavooComponent', () => {
  let component: FavooComponent;
  let fixture: ComponentFixture<FavooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
