import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigrammeComponent } from './organigramme.component';

describe('OrganigrammeComponent', () => {
  let component: OrganigrammeComponent;
  let fixture: ComponentFixture<OrganigrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganigrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
