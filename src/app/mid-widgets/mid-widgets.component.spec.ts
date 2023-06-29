import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidWidgetsComponent } from './mid-widgets.component';

describe('MidWidgetsComponent', () => {
  let component: MidWidgetsComponent;
  let fixture: ComponentFixture<MidWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
