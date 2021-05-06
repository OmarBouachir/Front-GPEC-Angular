import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationAddComponent } from './autorisation-add.component';

describe('AutorisationAddComponent', () => {
  let component: AutorisationAddComponent;
  let fixture: ComponentFixture<AutorisationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorisationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorisationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
