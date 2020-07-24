import { Component } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;
  exibirCaixa: boolean = false;
  produto: string;

  alterarNome(event): void {
    //console.log(event);
    console.log(event.target.value);
    this.nome = event.target.value;
  }

  adicionar(nome): void {
    console.log(nome);
    this.nome = nome;
    this.exibirCaixa = true;
  }

  alterarProduto(produto): void {
    this.produto = "Novo Produto: " + produto;
  }


  // nome: string = "José";
  // idade: number = 20;

  // lancarDado(): number {
  //   return Math.floor(Math.random() * 6) + 1;
  // }

  // adicionar(): void {
  //   console.log("Adicionando...");
  // }
}
