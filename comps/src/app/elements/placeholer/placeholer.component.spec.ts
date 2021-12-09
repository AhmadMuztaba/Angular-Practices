import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholerComponent } from './placeholer.component';

describe('PlaceholerComponent', () => {
  let component: PlaceholerComponent;
  let fixture: ComponentFixture<PlaceholerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
