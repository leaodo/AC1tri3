import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaCepPage } from './consulta-cep.page';

describe('ConsultaCepPage', () => {
  let component: ConsultaCepPage;
  let fixture: ComponentFixture<ConsultaCepPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
