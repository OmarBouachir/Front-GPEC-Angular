import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeAddComponent } from './conge-add.component';

describe('CongeAddComponent', () => {
  let component: CongeAddComponent;
  let fixture: ComponentFixture<CongeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
