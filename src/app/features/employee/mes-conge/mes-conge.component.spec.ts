import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCongeComponent } from './mes-conge.component';

describe('MesCongeComponent', () => {
  let component: MesCongeComponent;
  let fixture: ComponentFixture<MesCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
