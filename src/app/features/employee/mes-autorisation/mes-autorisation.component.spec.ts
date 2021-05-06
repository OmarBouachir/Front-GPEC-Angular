import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAutorisationComponent } from './mes-autorisation.component';

describe('MesAutorisationComponent', () => {
  let component: MesAutorisationComponent;
  let fixture: ComponentFixture<MesAutorisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesAutorisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
