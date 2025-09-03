import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.page.html',
  styleUrls: ['./consulta-cep.page.scss'],
  standalone: false
})
export class ConsultaCepPage {
  cep: string = '';
  endereco: any;

  constructor(private http: HttpClient) {}

  buscarCEP() {
    if (this.cep) {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;
      this.http.get(url).subscribe({
        next: (data) => {
          this.endereco = data;
        },
        error: (err) => {
          console.error('Erro ao buscar CEP', err);
        }
      });
    }
  }
}
