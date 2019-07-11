import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesComponent } from './datos-personales.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DatosPersonalesComponent', () => {
  let component: DatosPersonalesComponent;
  let fixture: ComponentFixture<DatosPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPersonalesComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
