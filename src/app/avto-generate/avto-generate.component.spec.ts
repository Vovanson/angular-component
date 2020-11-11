import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtoGenerateComponent } from './avto-generate.component';

describe('AvtoGenerateComponent', () => {
  let component: AvtoGenerateComponent;
  let fixture: ComponentFixture<AvtoGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvtoGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvtoGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
