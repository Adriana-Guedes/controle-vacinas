import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacinasComponent } from './create-vacinas.component';

describe('CreateVacinasComponent', () => {
  let component: CreateVacinasComponent;
  let fixture: ComponentFixture<CreateVacinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVacinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
