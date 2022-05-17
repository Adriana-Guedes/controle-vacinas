import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVacinasComponent } from './delete-vacinas.component';

describe('DeleteVacinasComponent', () => {
  let component: DeleteVacinasComponent;
  let fixture: ComponentFixture<DeleteVacinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVacinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
