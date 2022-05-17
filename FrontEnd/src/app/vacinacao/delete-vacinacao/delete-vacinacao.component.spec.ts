import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVacinacaoComponent } from './delete-vacinacao.component';

describe('DeleteVacinacaoComponent', () => {
  let component: DeleteVacinacaoComponent;
  let fixture: ComponentFixture<DeleteVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
