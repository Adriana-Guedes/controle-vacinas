import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVacinacaoComponent } from './update-vacinacao.component';

describe('UpdateVacinacaoComponent', () => {
  let component: UpdateVacinacaoComponent;
  let fixture: ComponentFixture<UpdateVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
