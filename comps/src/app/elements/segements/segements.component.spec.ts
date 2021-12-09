import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegementsComponent } from './segements.component';

describe('SegementsComponent', () => {
  let component: SegementsComponent;
  let fixture: ComponentFixture<SegementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
