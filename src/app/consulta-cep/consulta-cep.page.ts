import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.page.html',
  styleUrls: ['./consulta-cep.page.scss'],
  standalone: false,
})
export class ConsultaCepPage {

  cep= '';
  uf= '';
  cidade = '';
  rua = '';

  resultados: any[] = [];

  constructor(private http: HttpClient) {}


  buscarPorCep() {
    if (!this.cep) {
      alert('Digite um CEP válido');
      return;
    }
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .subscribe((data: any) => {
        if (data.erro) {
          alert('CEP não encontrado');
          this.resultados = [];
        } else {
          this.resultados = [data];
        }
      });
  }


  buscarPorEndereco() {
    if (!this.uf || !this.cidade || !this.rua) {
      alert('Digite UF, Cidade e Rua');
      return;
    }
    this.http.get(`https://viacep.com.br/ws/${this.uf}/${this.cidade}/${this.rua}/json/`)
      .subscribe((data: any) => {
        if (!data || data.length === 0) {
          alert('Endereço não encontrado');
          this.resultados = [];
        } else {
          this.resultados = data;
        }
      });
  }
}
