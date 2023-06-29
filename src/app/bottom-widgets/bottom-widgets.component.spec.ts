import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomWidgetsComponent } from './bottom-widgets.component';

describe('BottomWidgetsComponent', () => {
  let component: BottomWidgetsComponent;
  let fixture: ComponentFixture<BottomWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
