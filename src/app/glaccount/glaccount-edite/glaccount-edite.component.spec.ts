import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeGlaccountComponent } from './edite-glaccount.component';

describe('EditeGlaccountComponent', () => {
  let component: EditeGlaccountComponent;
  let fixture: ComponentFixture<EditeGlaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeGlaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeGlaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
