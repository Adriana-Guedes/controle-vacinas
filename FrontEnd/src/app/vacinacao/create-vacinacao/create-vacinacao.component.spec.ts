import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacinacaoComponent } from './create-vacinacao.component';

describe('CreateVacinacaoComponent', () => {
  let component: CreateVacinacaoComponent;
  let fixture: ComponentFixture<CreateVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
