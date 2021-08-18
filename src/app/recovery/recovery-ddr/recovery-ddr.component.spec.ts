import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryDdrComponent } from './recovery-ddr.component';

describe('RecoveryDdrComponent', () => {
  let component: RecoveryDdrComponent;
  let fixture: ComponentFixture<RecoveryDdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryDdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
