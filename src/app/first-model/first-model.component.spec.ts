import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModelComponent } from './first-model.component';

describe('FirstModelComponent', () => {
  let component: FirstModelComponent;
  let fixture: ComponentFixture<FirstModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
